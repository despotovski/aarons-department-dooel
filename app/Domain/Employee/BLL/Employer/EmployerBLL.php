<?php

namespace App\Domain\Employee\BLL\Employer;

use App\DomainUtils\BaseBLL\BaseBLL;
use App\DomainUtils\BaseBLL\BaseBLLFileUtils;
use App\Domain\Employee\DAL\Employer\EmployerDALInterface;

/**
 * @property EmployerDALInterface DAL
 */
class EmployerBLL extends BaseBLL implements EmployerBLLInterface
{
    use BaseBLLFileUtils;

    public function __construct(EmployerDALInterface $employerDAL)
    {
        $this->DAL = $employerDAL;
    }
}
