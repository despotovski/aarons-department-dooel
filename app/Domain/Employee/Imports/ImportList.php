<?php

namespace App\Domain\Employee\Imports;

use App\Domain\Employee\BLL\Employee\EmployeeBLL;
use App\Domain\Employee\BLL\Employer\EmployerBLL;
use App\Domain\Employee\BLL\Shift\ShiftBLL;
use App\Domain\Employee\Models\Shift;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\ToCollection;

/**
 * * This will suppress all the PMD warnings in * this class.
 * @SuppressWarnings(PHPMD.CyclomaticComplexity)
 */
class ImportList implements ToCollection
{
    private $rows = 0;

    /**
     * @param Collection $rows
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
                    'taxable' => $row[5] && $row[5] == 'Yes' ? Shift::TYPE_TAXABLE_YES : Shift::TYPE_TAXABLE_NO,
                    'status' => $row[6] === 'Complete'
                        ? Shift::TYPE_STATUS_COMPLETE
                        : ($row[6] === 'Failed'
                            ? Shift::TYPE_STATUS_FAILED
                            : Shift::TYPE_STATUS_PENDING
                        ),
                    'type' => $row[7] === 'Day' ? Shift::TYPE_SHIFT_DAY : Shift::TYPE_SHIFT_NIGHT,
                    'paid_at' => $row[8] ?? null,
                ];

                //Create Employer
                $employer = $employerBLL->query()
                    ->where('name', $data['name'])
                    ->first();

                if (!$employer) {
                    $employer = $employerBLL->create([
                        'name' => $data['name']
                    ]);
                }

                //Create Employee
                $employee = $employeeBLL->query()
                    ->where('full_name', $data['full_name'])
                    ->first();

                if (!$employee) {
                    $employee = $employeeBLL->create([
                        'full_name' => $data['full_name'],
                        'employer_id' => $employer->id
                    ]);
                }


                //Create Shift
                $shift = $shiftBLL->create([
                    'date' => $data['date'],
                    'hours' => $data['hours'],
                    'rate_per_hour' => ltrim($data['rate_per_hour'], '£'),
                    'taxable' => $data['taxable'],
                    'status' => $data['status'],
                    'type' => $data['type'],
                    'paid_at' => $data['paid_at'],
                    'employee_id' => $employee->id
                ]);

                //Update shift with calculation
                $shiftBLL->update($shift, [
                    'total_paid' => $shift->hours * $shift->rate_per_hour
                ]);
            }
        });
    }
}
