<?php

namespace App\Services\Translator;

use Maatwebsite\Excel\Facades\Excel;
use App\Services\Translator\Excel\ExportExcel;
use App\Services\Translator\Excel\ImportExcel;

class TranslatorService extends BaseTranslator implements TranslatorServiceInterface
{
    /**
     * @param $filename
     * @return bool|\Illuminate\Foundation\Bus\PendingDispatch
     */
    public function export($filename)
    {
        return (new ExportExcel($this->translations()))->store($filename);
    }

    /**
     * @param $filename
     */
    public function import($filename)
    {
        Excel::import(new ImportExcel($this->locales()), $filename);
    }
}
