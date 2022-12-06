<?php

namespace App\Domain\Employee\Controllers;

use App\Domain\Employee\BLL\Shift\ShiftBLLInterface;
use App\Domain\Employee\Models\Employee;
use App\Http\Controllers\Controller;
use App\Domain\Employee\BLL\Employee\EmployeeBLLInterface;
use App\Traits\DataTableUtils;
use Yajra\DataTables\Facades\DataTables;

use function Symfony\Component\Translation\t;

/**
 * @property EmployeeBLLInterface employeeBLL
 * @property ShiftBLLInterface $shiftBLL
 */
class EmployeeController extends Controller
{
    use DataTableUtils;

    public function __construct(EmployeeBLLInterface $employeeBLL, ShiftBLLInterface $shiftBLL)
    {
        $this->employeeBLL = $employeeBLL;
        $this->shiftBLL = $shiftBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return inertia('Employee/Index', []);
    }

    /**
     * @throws \Exception
     */
    public function get()
    {
        $employees = $this->employeeBLL->getEmployees();

        return DataTables::eloquent($employees)
            ->make(true);
    }

    public function show(Employee $employee)
    {
        return inertia('Employee/Show', [
            'employee' => $employee,
            'averagePay' => $this->shiftBLL->getAveragePayPerHour($employee->id),
            'averageTotalPaid' => $this->shiftBLL->getAverageTotalPay($employee->id)
        ]);
    }

    public function getEmployeePayments(Employee $employee)
    {
        $payments = $this->shiftBLL->getEmployeePayments($employee->id);

        return DataTables::eloquent($payments)
            ->editColumn('paid', function ($payment) {
                return $payment->hours * $payment->rate_per_hour;
            })
            ->make(true);
    }
}
