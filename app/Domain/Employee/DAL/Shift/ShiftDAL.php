<?php

namespace App\Domain\Employee\DAL\Shift;

use App\DomainUtils\BaseDAL\BaseDAL;
use App\Domain\Employee\Models\Shift;

/**
 * @property Shift model
 */
class ShiftDAL extends BaseDAL implements ShiftDALInterface
{
    public function __construct(Shift $shift)
    {
        $this->model = $shift;
    }
}
