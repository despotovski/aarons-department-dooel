<?php

return [
    'title' => 'Liste des transactions',
    'date_and_time' => 'Date et heure',
    'stripe_transaction_id' => 'ID de transaction Stripe',
    'amount' => 'Montant',
    'payment_status' => 'Statut de paiement',
    'transfer_status' => 'Statut de transfert',
    'number_of_nfts' => 'Nombre de NFT achetés',
    'customer' => 'Client',
    'transaction_id' => 'Identifiant de transaction',
    'filters' => [
        'search_by_customer' => 'Adresse e-mail du client, prénom ou nom',
        'search_by_nft_name' => 'Recherche par ID ou nom NFT',
        'search_by_nfts_name' => 'Rechercher par nom NFT',
    ],
    'transactions_title' => 'Transaction n°{{ transactionId }}',
    'back_to_list_of_transactions' => 'Retour à la liste des transactions',
    'transactions_table' => [
        'list_of_purchased_nfts' => 'Liste des NFTs achetés ({{ nftCount }})',
        'nft_id' => 'Identifiant NFT',
        'nft_name' => 'Nom NFT',
        'quantity' => 'Quantité',
        'unit_price' => 'Prix ​​unitaire',
        'total' => 'Total',
        'retry_transfer' => 'Réessayer le transfert',
        'retry_transfer_all' => 'Réessayez tous les transferts ayant échoués',
    ],
    'view_stripe' => 'En savoir plus sur Stripe',
    'my_transactions_title' => 'Liste de mes transactions',
    'retry' => [
        'success_message' => 'La nouvelle tentative a réussi !',
    ],
    'failed' => 'Le transfert a échoué car : {{ failedMessage }}',
    'blockchain_transaction' => 'Transaction blockchain',
];