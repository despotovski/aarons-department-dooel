<?php

namespace App\Domain\Employee\Routes;

class EmployeeReactLinks
{
    public static function getRoutes()
    {
        return [
            'employee' => [
                'import' => route('employee.import'),
                'get' => route('employee.get'),
                'index' => route('employee.index'),
                'generalInfo' => route('employee.show', ['employee' => '%employee%']),
                'getEmployeePayments' => route('employee.payments', ['employee' => '%employee%'])
            ]
        ];
    }
}
