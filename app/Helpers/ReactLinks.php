<?php

namespace App\Helpers;

use App\Domain\Employee\Routes\EmployeeReactLinks;
use Illuminate\Support\Facades\Cache;

class ReactLinks
{
    public static function getReactLinks()
    {
        return Cache::rememberForever('react-links', function () {
            return array_merge(
                EmployeeReactLinks::getRoutes()
            );
        });
    }
}
