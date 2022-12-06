<?php

namespace App\Domain\Employee\DAL\Employer;

use App\DomainUtils\BaseDAL\BaseDAL;
use App\Domain\Employee\Models\Employer;

/**
 * @property Employer model
 */
class EmployerDAL extends BaseDAL implements EmployerDALInterface
{
    public function __construct(Employer $employer)
    {
        $this->model = $employer;
    }
}
