<?php

namespace App\Domain\Employee\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed $id
 */
class Employee extends Model
{
    protected $fillable = [
        'full_name',
        'employer_id'
    ];

    public function employer()
    {
        return $this->belongsTo(Employer::class);
    }
}
