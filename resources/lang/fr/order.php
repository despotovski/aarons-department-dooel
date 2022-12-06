<?php

return [
    'quantity_error' => 'La quantité ne peut pas dépasser :quantity',
    'home_button' => 'RETOUR À LA PAGE D\'ACCUEIL',
    'cancelled' => [
        'title' => 'La transaction a été annulée',
        'content' => 'Bonjour {{user}}, malheureusement, la transaction a été annulée. Veuillez réessayer. Si cette erreur persiste, veuillez nous contacter.',
    ],
    'successful' => [
        'title' => 'Transaction réussie !',
        'content' => 'Bonjour {{user}}, merci d\'avoir acheté un NFT sur notre plateforme ! Votre paiement a été confirmé. ',
    ],
    'redirecting' => 'Redirection vers Stripe...',
    'basket' => [
        'add_to_basket_success' => 'Le nft a bien été ajouté à votre panier.',
        'add_to_basket_failed' => 'Nous n\'avons pas pu ajouter le nft à votre panier.',
        'remove_from_basket' => 'Le NFT a été supprimé de votre panier.',
        'update_basket' => 'Le panier a été mis à jour.',
        'basket_info' => 'Informations de commande',
        'total' => 'Total',
        'empty_basket' => 'Il n\'y a pas de NFT dans votre panier',
        'sale_closed' => 'Ce NFT n\'est plus disponible',
        'empty' => 'Le panier est vide',
        'title' => 'Votre panier',
    ],
    'statuses' => [
        'payment_statuses' => [
            'successful' => 'Réussi',
            'failed' => 'Échoué',
        ],
        'transaction_statuses' => [
            'non_applicable' => 'N\'est pas applicable',
            'pending' => 'En attente',
            'successful' => 'Réussi',
            'failed' => 'Échoué',
        ],
    ],
];