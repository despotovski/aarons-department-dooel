<?php

namespace App\Domain\Employee\Controllers;

use App\Domain\Employee\BLL\Employee\EmployeeBLLInterface;
use App\Domain\Employee\BLL\Employer\EmployerBLLInterface;
use App\Http\Controllers\Controller;
use App\Domain\Employee\BLL\Shift\ShiftBLLInterface;
use App\Domain\Employee\Models\Shift;
use App\Domain\Employee\Requests\ShiftRequest;
use App\Traits\DataTableUtils;
use Carbon\Carbon;
use Yajra\DataTables\Facades\DataTables;

/**
 * @property ShiftBLLInterface shiftBLL
 * @property EmployerBLLInterface $employerBLL
 * @property EmployeeBLLInterface $employeeBLL
 */
class ShiftController extends Controller
{
    use DataTableUtils;

    public function __construct(
        ShiftBLLInterface $shiftBLL,
        EmployerBLLInterface $employerBLL,
        EmployeeBLLInterface $employeeBLL
    ) {
        $this->shiftBLL = $shiftBLL;
        $this->employerBLL = $employerBLL;
        $this->employeeBLL = $employeeBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return inertia('Shift/Index', []);
    }

    public function get()
    {
        $shifts = $this->shiftBLL->getAllShifts();

        return DataTables::eloquent($shifts)->filter(function ($query) {
            $this->filterCustomRule($query);
        })
            ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create()
    {
        return inertia('Shift/Create', [
            'options' => [
                'statuses' => $this->shiftBLL->getStatusOptions(),
                'taxable' => $this->shiftBLL->getTaxableOptions(),
                'type' => $this->shiftBLL->getTypeOptions(),
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ShiftRequest $request
     */
    public function store(ShiftRequest $request)
    {
        $data = $request->all();

        //Check if employer exist
        $employer = $this->employerBLL->query()
            ->where('name', $data['name'])
            ->first();

        //Create employer
        if (!$employer) {
            $employer = $this->employerBLL->create([
                'name' => $data['name']
            ]);
        }

        //Check if employee exist
        $employee = $this->employeeBLL->query()
            ->where('full_name', $data['full_name'])
            ->first();

        //Create employee
        if (!$employee) {
            $employee = $this->employeeBLL->create([
                'full_name' => $data['full_name'],
                'employer_id' => $employer->id
            ]);
        }

        //Creating shift
        $shift = $this->shiftBLL->create([
            'employee_id' => $employee->id,
            'date' => Carbon::parse($data['date'])->toDateString(),
            'hours' => $data['hours'],
            'rate_per_hour' => $data['rate_per_hour'],
            'taxable' => $data['taxable'],
            'status' => $data['status'],
            'type' => $data['type']
        ]);

        //Updating shift with calculation
        $this->shiftBLL->update($shift, [
            'total_paid' => $shift->hours * $shift->rate_per_hour
        ]);

        session()->flash('success', trans('Shift was successfully created'));
        return redirect()->route('shift.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Shift  $shift
     */
    public function edit(Shift $shift)
    {
        return inertia('Shift/Edit', [
            'shift' => $shift->load('employee.employer'),
            'options' => [
                'statuses' => $this->shiftBLL->getStatusOptions(),
                'taxable' => $this->shiftBLL->getTaxableOptions(),
                'type' => $this->shiftBLL->getTypeOptions(),
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ShiftRequest $request
     * @param  Shift  $shift
     */
    public function update(ShiftRequest $request, Shift $shift)
    {
        $data = $request->all();

        $this->shiftBLL->update($shift, [
            'date' => Carbon::parse($data['date'])->toDateString(),
            'hours' => $data['hours'],
            'rate_per_hour' => $data['rate_per_hour'],
            'taxable' => $data['taxable'],
            'status' => $data['status'],
            'type' => $data['type'],
            'paid_at' => $data['status'] === Shift::TYPE_STATUS_COMPLETE ? now() : null
         ]);
//
//        if ($data['status'] === Shift::TYPE_STATUS_COMPLETE) {
//            $this->shiftBLL->update($shift, [
//                'paid_at' => now()
//            ]);
//        }

        //Updating shift with calculation
        $this->shiftBLL->update($shift, [
            'total_paid' => $shift->hours * $shift->rate_per_hour
        ]);

        session()->flash('success', trans('Shift was successfully updated'));
        return redirect()->route('shift.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Shift $shift
     */
    public function destroy(Shift $shift)
    {
        $this->shiftBLL->delete($shift);

        return response()->json(['message' => 'Shift was successfully removed']);
    }
}
