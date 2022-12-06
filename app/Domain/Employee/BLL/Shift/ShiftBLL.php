<?php

namespace App\Domain\Employee\BLL\Shift;

use App\DomainUtils\BaseBLL\BaseBLL;
use App\DomainUtils\BaseBLL\BaseBLLFileUtils;
use App\Domain\Employee\DAL\Shift\ShiftDALInterface;

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

    public function getRatePerHourEmployee($employee)
    {
        return $this->DAL->query()
            ->where('employee_id', $employee)
            ->pluck('rate_per_hour')
            ->toArray();
    }

    public function getHoursPerEmployee($employee)
    {
        return $this->DAL->query()
            ->where('employee_id', $employee)
            ->pluck('hours')
            ->toArray();
    }

    public function getAveragePayPerHour($employee)
    {
        $hours = $this->getHoursPerEmployee($employee);
        $rates = $this->getRatePerHourEmployee($employee);
        $sum = array_sum($hours) * array_sum($rates);

        return $sum / array_sum($hours);
    }

    public function getAverageTotalPay($employee)
    {
        $shifts = $this->DAL->query()
            ->where('employee_id', $employee)
            ->count();

        $hours = $this->getHoursPerEmployee($employee);
        $rates = $this->getRatePerHourEmployee($employee);
        $sum = array_sum($hours) * array_sum($rates);

        return $sum / $shifts;
    }


    public function getEmployeePayments($employee)
    {
        return $this->DAL->query()
            ->where('employee_id', $employee)
            ->whereNotNull('paid_at')
            ->take(5)
            ->select('shifts.*');
    }
}
