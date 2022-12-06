<?php

namespace App\Domain\Employee\DAL\Employee;

use App\DomainUtils\BaseDAL\BaseDAL;
use App\Domain\Employee\Models\Employee;

/**
 * @property Employee model
 */
class EmployeeDAL extends BaseDAL implements EmployeeDALInterface
{
    public function __construct(Employee $employee)
    {
        $this->model = $employee;
    }
}
