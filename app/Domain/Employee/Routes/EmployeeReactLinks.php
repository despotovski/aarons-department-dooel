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
            ],
            'shift' => [
                'index' => route('shift.index'),
                'get' => route('shift.get'),
                'create' => route('shift.create'),
                'store' => route('shift.store'),
                'edit' => route('shift.edit', ['shift' => '%shift%']),
                'update' => route('shift.update', ['shift' => '%shift%']),
                'destroy' => route('shift.destroy', ['shift' => '%shift%'])
            ]
        ];
    }
}
