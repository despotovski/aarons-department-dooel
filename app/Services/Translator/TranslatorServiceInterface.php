<?php

namespace App\Services\Translator;

interface TranslatorServiceInterface
{
    public function export($filename);

    public function import($filename);
}
