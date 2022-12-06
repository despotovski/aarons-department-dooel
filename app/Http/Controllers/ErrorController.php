<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ErrorController extends Controller
{
    public function index($status, Request $request)
    {
        $host = $request->server->get('HTTP_HOST');
        $subDomain = substr($host, 0, strpos($host, env('APP_ADMIN_NEEDLE', '.')));

        $subDomainAdmin = $subDomain === config('app.sub_domain');

        return inertia('Error', [
            'status' => $status,
            'subDomainAdmin' => $subDomainAdmin
        ])
            ->toResponse(request())
            ->setStatusCode($status);
    }
}
