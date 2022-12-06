<?php

namespace App\Exceptions;

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);


        if ($request->header('X-Inertia') || !$request->wantsJson()) {
            if (!$response->isRedirect()) {
                $sharedData = (new HandleInertiaRequests())->share($request);
                $sharedData['status'] = $response->status();
                $sharedData['errors'] = [];

                return inertia('Error', $sharedData)
                    ->toResponse($request)
                    ->setStatusCode($response->status());
            }
        }

        return $response;
    }
}
