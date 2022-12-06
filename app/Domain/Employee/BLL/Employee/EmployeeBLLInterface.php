<?php

namespace App\Domain\Employee\BLL\Employee;

use App\DomainUtils\BaseBLL\BaseBLLInterface;

interface EmployeeBLLInterface extends BaseBLLInterface
{
    public function getEmployees();
}
