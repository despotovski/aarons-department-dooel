<?php

return [
    401 => [
        'title' => '401: Non autorisé',
        'description' => 'Désolé, vous n\'êtes pas autorisé à accéder à cette page.',
    ],
    403 => [
        'title' => '403: Interdit',
        'description' => 'Désolé, l\'accès à cette page vous est interdit',
    ],
    404 => [
        'title' => '404: Page non trouvée',
        'description' => 'Désolé, la page que vous cherchez n\'a pas pu être trouvée.',
    ],
    419 => [
        'title' => '419: Token CSRF expiré',
        'description' => 'Oops, votre token CSRF a expiré.',
    ],
    500 => [
        'title' => '500: Erreur serveur',
        'description' => 'Oops, une erreur est survenue sur nos serveurs.',
    ],
    503 => [
        'title' => '503: Service indisponible',
        'description' => 'Désolé, nous sommes en maintenace. Merci de réessayer plus tard.',
    ],
];