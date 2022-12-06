<?php

return [
    401 => [
        'title' => '401: Ongeautoriseerd',
        'description' => 'Sorry, u heeft geen toegang tot deze pagina.',
    ],
    403 => [
        'title' => '403 verboden',
        'description' => 'Sorry, het is verboden toegang te krijgen tot deze pagina.',
    ],
    404 => [
        'title' => '404 Niet Gevonden',
        'description' => 'Sorry, de pagina die u zoekt is niet gevonden.',
    ],
    419 => [
        'title' => '419: CSRF-token verlopen',
        'description' => 'Oeps, uw CSRF-token is verlopen.',
    ],
    500 => [
        'title' => '500: Serverfout',
        'description' => 'Oeps, er is iets misgegaan op onze servers.',
    ],
    503 => [
        'title' => '503 Service niet beschikbaar',
        'description' => 'Sorry, we zijn bezig met onderhoud. Kom binnenkort terug.',
    ],
];