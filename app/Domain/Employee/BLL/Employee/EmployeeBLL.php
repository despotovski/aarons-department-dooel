<?php

namespace App\Domain\Employee\BLL\Employee;

use App\DomainUtils\BaseBLL\BaseBLL;
use App\DomainUtils\BaseBLL\BaseBLLFileUtils;
use App\Domain\Employee\DAL\Employee\EmployeeDALInterface;

/**
 * @property EmployeeDALInterface DAL
 */
class EmployeeBLL extends BaseBLL implements EmployeeBLLInterface
{
    use BaseBLLFileUtils;

    public function __construct(EmployeeDALInterface $employeeDAL)
    {
        $this->DAL = $employeeDAL;
    }

    public function getEmployees()
    {
        return $this->DAL->query()
            ->with('employer')
            ->select('employees.*');
    }
}
