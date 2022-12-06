<?php

namespace App\Domain\Employee\Controllers;

use App\Domain\Employee\Imports\ImportList;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ImportController extends Controller
{
    /**
     * @throws \Exception
     */
    public function import(Request $request)
    {
        $import = new ImportList();

        Excel::import($import, $request->file('file'));

        return response()->json(['message' => trans('employee.upload.success')]);
    }
}
