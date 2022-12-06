<?php

return [
    401 => [
        'title' => '401: Unauthorized',
        'description' => 'Sorry, you are unauthorized to access this resource.',
    ],
    403 => [
        'title' => 'Access denied.',
        'description' => 'Sorry, you are now allowed to access this page. If you think this is an error, please contact us.',
    ],
    404 => [
        'title' => 'Page not found.',
        'description' => 'Sorry, we couldn’t find that page.',
    ],
    419 => [
        'title' => '419: CSRF Token expired',
        'description' => 'Whoops, your CSRF token has expired.',
    ],
    500 => [
        'title' => '500: Server Error',
        'description' => 'Whoops, something went wrong on our servers.',
    ],
    503 => [
        'title' => '503: Service Unavailable',
        'description' => 'Sorry, we are doing some maintenance. Please check back soon.',
    ],
];