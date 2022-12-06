<?php

namespace App\Domain\Employee\Models;

use Illuminate\Database\Eloquent\Model;

class Shift extends Model
{
    protected $fillable = [
        'date',
        'hours',
        'rate_per_hour',
        'taxable',
        'status',
        'type',
        'paid_at',
        'employee_id'
    ];
}
