<?php

namespace App\Services\Translator;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Cache;

abstract class BaseTranslator
{
    /**
     * @return mixed
     */
    protected function translations()
    {
        $translations = collect();

        foreach ($this->locales() as $locale) {
            $translations[$locale] = Arr::dot($this->phpTranslations($locale));
        }

        return $translations;
    }

    /**
     * @param $locale
     * @return \Illuminate\Support\Collection
     */
    public function phpTranslations($locale)
    {
        return Cache::rememberForever("translation_{$locale}", function () use ($locale) {
            $path = resource_path("lang/" . $locale);

            return collect(File::allFiles($path))->flatMap(
                function ($file) use ($locale) {
                    $key = ($translation = $file->getBasename('.php'));
                    return [$key => trans($translation, $replace = [], $locale)];
                }
            );
        });
    }

    /**
     * @param $locale
     * @return array|mixed
     */
    protected function jsonTranslations($locale)
    {
        $path = resource_path("lang/$locale.json");

        if (is_string($path) && is_readable($path)) {
            return json_decode(file_get_contents($path), true);
        }
        return [];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    protected function locales()
    {
        return collect(File::directories(resource_path('lang')))->map(function ($dir) {
            $pieces = explode('/', $dir);
            return $pieces[count($pieces) - 1];
        });
    }
}
