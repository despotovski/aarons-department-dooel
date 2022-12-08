<?php

namespace App\Domain\Employee\BLL\Shift;

use App\Domain\Employee\Models\Shift;
use App\DomainUtils\BaseBLL\BaseBLL;
use App\DomainUtils\BaseBLL\BaseBLLFileUtils;
use App\Domain\Employee\DAL\Shift\ShiftDALInterface;
use Illuminate\Support\Facades\DB;

/**
 * @property ShiftDALInterface DAL
 */
class ShiftBLL extends BaseBLL implements ShiftBLLInterface
{
    use BaseBLLFileUtils;

    public function __construct(ShiftDALInterface $shiftDAL)
    {
        $this->DAL = $shiftDAL;
    }

    public function getAllShifts()
    {
        return $this->DAL->query()
            ->with('employee.employer')
            ->select('shifts.*');
    }

    public function getAveragePayPerHour($employee)
    {
        return DB::table('shifts')
            ->where('employee_id', $employee)
            ->select(DB::raw('sum(hours * rate_per_hour) / sum(hours) as averagePayHour'))
            ->first()
            ->averagePayHour;
    }


    public function getAverageTotalPay($employee)
    {
        return DB::table('shifts')
            ->where('employee_id', $employee)
            ->select(DB::raw('sum(hours * rate_per_hour) as averageTotalPay'))
            ->first()
            ->averageTotalPay;
    }


    public function getEmployeePayments($employee)
    {
        return $this->DAL->query()
            ->where('employee_id', $employee)
            ->where('status', Shift::TYPE_STATUS_COMPLETE)
            ->take(5)
            ->select('shifts.*');
    }

    public function getStatusOptions()
    {
        return [
            [
                'label' => 'Pending',
                'value' => Shift::TYPE_STATUS_PENDING
            ],
            [
                'label' => 'Complete',
                'value' => Shift::TYPE_STATUS_COMPLETE
            ],
            [
                'label' => 'Failed',
                'value' => Shift::TYPE_STATUS_FAILED
            ]
        ];
    }

    public function getTaxableOptions()
    {
        return [
            [
                'label' => 'Yes',
                'value' => Shift::TYPE_TAXABLE_YES
            ],
            [
                'label' => 'No',
                'value' => Shift::TYPE_TAXABLE_NO
            ]
        ];
    }

    public function getTypeOptions()
    {
        return [
            [
                'label' => 'Day',
                'value' => Shift::TYPE_SHIFT_DAY
            ],
            [
                'label' => 'Night',
                'value' => Shift::TYPE_SHIFT_NIGHT
            ]
        ];
    }
}
