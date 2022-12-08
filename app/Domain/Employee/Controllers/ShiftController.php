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

        $employer = $this->employerBLL->query()
            ->where('name', $data['name'])
            ->first();

        if (!$employer) {
            $employer = $this->employerBLL->create([
                'name' => $data['name']
            ]);
        }
        //Employee
        $employee = $this->employeeBLL->query()
            ->where('full_name', $data['full_name'])
            ->first();

        if (!$employee) {
            $employee = $this->employeeBLL->create([
                'full_name' => $data['full_name'],
                'employer_id' => $employer->id
            ]);
        }

        $this->shiftBLL->create([
            'employee_id' => $employee->id,
            'date' => Carbon::parse($data['date'])->toDateString(),
            'hours' => $data['hours'],
            'rate_per_hour' => $data['rate_per_hour'],
            'taxable' => $data['taxable'],
            'status' => $data['status'],
            'type' => $data['type']
        ]);

        session()->flash('success', trans('members.success.add'));
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
            'taxable' => $data['taxable'] === 'Yes' ? Shift::TYPE_TAXABLE_YES : Shift::TYPE_TAXABLE_NO,
            'status' => $data['status'] === 'Pending' ? Shift::TYPE_STATUS_PENDING : Shift::TYPE_STATUS_COMPLETE,
            'type' => $data['type'] === 'Day' ? Shift::TYPE_SHIFT_DAY : Shift::TYPE_SHIFT_NIGHT
        ]);

        session()->flash('success', trans('Shift successfully updated'));
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