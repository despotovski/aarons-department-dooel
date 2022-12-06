<?php

return [
    'title' => 'Lijst met transacties',
    'date_and_time' => 'Datum en tijd',
    'stripe_transaction_id' => 'Stripe transactie-ID',
    'amount' => 'Hoeveelheid',
    'payment_status' => 'Betalingsstatus',
    'transfer_status' => 'Overdrachtstatus',
    'number_of_nfts' => 'Aantal gekochte NFT\'s',
    'customer' => 'Klant',
    'transaction_id' => 'Transactie ID',
    'filters' => [
        'search_by_customer' => 'E-mailadres van de klant, voor- of achternaam',
        'search_by_nft_name' => 'Zoeken op NFT-ID of naam',
        'search_by_nfts_name' => 'Zoeken op NFT-naam',
    ],
    'transactions_title' => 'Transactie #{{ transactie-ID }}',
    'back_to_list_of_transactions' => 'Terug naar lijst met transacties',
    'transactions_table' => [
        'list_of_purchased_nfts' => 'Lijst met gekochte NFT\'s ({{ nftCount }})',
        'nft_id' => 'NFT-ID',
        'nft_name' => 'NFT-naam',
        'quantity' => 'Hoeveelheid',
        'unit_price' => 'Prijs per eenheid',
        'total' => 'Totaal',
        'retry_transfer' => 'Overdracht opnieuw proberen',
        'retry_transfer_all' => 'Probeer alle mislukte overdrachten opnieuw',
    ],
    'view_stripe' => 'Zie meer op stripe',
    'my_transactions_title' => 'Lijst van mijn transacties',
    'retry' => [
        'success_message' => 'Opnieuw proberen is gelukt!',
    ],
    'failed' => 'Overdracht is mislukt omdat: {{ failedMessage }}',
    'blockchain_transaction' => 'Blockchain transactiie',
];