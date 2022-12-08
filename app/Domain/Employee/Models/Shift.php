<?php

namespace App\Domain\Employee\Models;

use Illuminate\Database\Eloquent\Model;

class Shift extends Model
{
    //Shift type
    public const TYPE_SHIFT_DAY = 10;
    public const TYPE_SHIFT_NIGHT = 20;
    //Shift Status
    public const TYPE_STATUS_COMPLETE = 10;
    public const TYPE_STATUS_PENDING = 20;
    public const TYPE_STATUS_FAILED = 30;
    //Taxable
    public const TYPE_TAXABLE_YES = 10;
    public const TYPE_TAXABLE_NO = 20;

    protected $fillable = [
        'date',
        'hours',
        'rate_per_hour',
        'taxable',
        'status',
        'type',
        'paid_at',
        'employee_id',
        'total_paid'
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
