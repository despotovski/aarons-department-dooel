<?php

namespace App\Http\Middleware;

use App\Domain\Language\BLL\Language\LanguageBLL;
use App\Domain\NFT\BLL\Category\CategoryBLL;
use App\Domain\User\Models\User;
use App\Helpers\ReactLinks;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\Translator\TranslatorService;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        /** @var User $user */
        $user = Auth::user();


        return array_merge(parent::share($request), [
            'app' => [
                'name' => config('app.name'),
                'locale' => app()->getLocale(),
            ],
            'translations' => function () {
                $translatorService = new TranslatorService();

                // Set en as fallback language
                $translations = [
                    'en' => [
                        'translation' => $translatorService->phpTranslations('en'),
                    ]
                ];

                if (app()->getLocale() !== 'en') {
                    $translations[app()->getLocale()] = [
                        'translation' => $translatorService->phpTranslations(app()->getLocale()),
                    ];
                }

                return $translations;
            },
            'recaptchaSiteKey' => config('app.recaptcha_site_key'),
            'url' => [
                'current' => $request->path(),
                'current_uri' => $request->getRequestUri(),
                'current_full' => $request->fullUrl(),
            ],
            'auth' => $user
                ? [
                    'user' => $user,
                    'roles' => $user->getRoleNames(),
                    'permissions' => array_values(
                        array_unique(
                            $user->getPermissionsViaRoles()->pluck('name')->toArray()
                        )
                    ),
                ]
                : null,
            'flash' => [
                'success' => Session::get('success'),
                'error' => Session::get('error'),
            ],
            'links' => ReactLinks::getReactLinks(),
        ]);
    }

    /**
     * Resolves and prepares validation errors in such
     * a way that they are easier to use client-side.
     *
     * @param  Request  $request
     * @return object
     */
    public function resolveValidationErrors(Request $request)
    {
        if (! $request->session()->has('errors')) {
            return (object) [];
        }

        return (object) collect($request->session()->get('errors')->getBags())->map(function ($bag) {
            return (object) collect($bag->messages())->toArray();
        })->pipe(function ($bags) use ($request) {
            if ($bags->has('default') && $request->header('x-inertia-error-bag')) {
                return [$request->header('x-inertia-error-bag') => $bags->get('default')];
            }

            if ($bags->has('default')) {
                return $bags->get('default');
            }

            return $bags->toArray();
        });
    }
}
