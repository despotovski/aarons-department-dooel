<?php

namespace App\Domain\Employee\BLL\Shift;

use App\DomainUtils\BaseBLL\BaseBLLInterface;

interface ShiftBLLInterface extends BaseBLLInterface
{
    public function getRatePerHourEmployee($employee);

    public function getHoursPerEmployee($employee);

    public function getAveragePayPerHour($employee);

    public function getAverageTotalPay($employee);

    public function getEmployeePayments($employee);
}
