<?php

return [
    'quantity_error' => 'De hoeveelheid kan niet groter zijn dan :quantity',
    'home_button' => 'TERUG NAAR DE STARTPAGINA',
    'cancelled' => [
        'title' => 'De transactie is geannuleerd',
        'content' => 'Hallo {{user}}, helaas is de transactie geannuleerd. Probeer het opnieuw. Als deze fout zich blijft voordoen, neem dan contact op met ons.',
    ],
    'successful' => [
        'title' => 'Transactie geslaagd!',
        'content' => 'Hey, {{user}}! Bedankt voor de aankoop van je NFT op ons platform! Uw betaling is bevestigd.',
    ],
    'redirecting' => 'Doorsturen naar stripe...',
    'basket' => [
        'add_to_basket_success' => 'De NFT is toegevoegd aan je winkelmandje.',
        'add_to_basket_failed' => 'We konden de NFT niet aan je winkelmandje toevoegen.',
        'remove_from_basket' => 'De NFT is uit uw winkelmandje verwijderd.',
        'update_basket' => 'Uw winkelmandje is bijgewerkt.',
        'basket_info' => 'Bestel info',
        'total' => 'Totaal',
        'empty_basket' => 'Er zijn geen NFT\'s in uw winkelmandje',
        'sale_closed' => 'Deze NFT is niet meer beschikbaar',
        'empty' => 'Mandje is leeg',
        'title' => 'Jouw Winkelmand',
    ],
    'statuses' => [
        'payment_statuses' => [
            'successful' => 'Succesvol',
            'failed' => 'mislukt',
        ],
        'transaction_statuses' => [
            'non_applicable' => 'Niet toepasbaar',
            'pending' => 'In afwachting',
            'successful' => 'Succesvol',
            'failed' => 'mislukt',
        ],
    ],
];