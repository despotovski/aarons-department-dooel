<?php

namespace App\Domain\Employee\Imports;

use App\Domain\Employee\BLL\Employee\EmployeeBLL;
use App\Domain\Employee\BLL\Employer\EmployerBLL;
use App\Domain\Employee\BLL\Shift\ShiftBLL;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\ToCollection;

class ImportList implements ToCollection
{
    private $rows = 0;

    /**
     * @throws BindingResolutionException
     */
    public function collection(Collection $rows)
    {
        $rows = $rows->skip(1);

        $employeeBLL = app()->make(EmployeeBLL::class);
        $employerBLL = app()->make(EmployerBLL::class);
        $shiftBLL = app()->make(ShiftBLL::class);

        DB::transaction(function () use ($employeeBLL, $employerBLL, $shiftBLL, $rows) {
            foreach ($rows as $row) {
                $data = [
                    'date' => $row[0] ?? '-',
                    'full_name' => $row[1] ?? '-',
                    'name' => $row[2] ?? '-',
                    'hours' => $row[3] ?? '-',
                    'rate_per_hour' => $row[4] ?? '-',
                    'taxable' => $row[5] && $row[5] == 'Yes' ? 1 : 0,
                    'status' => $row[6] ?? '-',
                    'type' => $row[7] ?? '-',
                    'paid_at' => $row[8] ?? null,
                ];

                //Employer
                $employer = $employerBLL->query()
                    ->where('name', $data['name'])
                    ->first();

                if (!$employer) {
                    $employer = $employerBLL->create([
                        'name' => $data['name']
                    ]);
                }

                //Employee
                $employee = $employeeBLL->query()
                    ->where('full_name', $data['full_name'])
                    ->first();

                if (!$employee) {
                    $employee = $employeeBLL->create([
                        'full_name' => $data['full_name'],
                        'employer_id' => $employer->id
                    ]);
                }

                //Shift
                $shiftBLL->create([
                    'date' => $data['date'],
                    'hours' => $data['hours'],
                    'rate_per_hour' => ltrim($data['rate_per_hour'], '£'),
                    'taxable' => $data['taxable'],
                    'status' => $data['status'],
                    'type' => $data['type'],
                    'paid_at' => $data['paid_at'],
                    'employee_id' => $employee->id
                ]);

                ++$this->rows;
            }
        });
    }
}
