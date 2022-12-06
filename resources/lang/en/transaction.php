<?php

return [
    'title' => 'List of transactions',
    'date_and_time' => 'Date and time',
    'stripe_transaction_id' => 'Stripe transaction ID',
    'amount' => 'Amount',
    'payment_status' => 'Payment status',
    'transfer_status' => 'Transfer status',
    'number_of_nfts' => 'Number of purchased NFTs',
    'customer' => 'Customer',
    'transaction_id' => 'Transaction ID',
    'filters' => [
        'search_by_customer' => 'Customer email address, first or last name',
        'search_by_nft_name' => 'Search by NFT ID or Name',
        'search_by_nfts_name' => 'Search by NFT name',
    ],
    'transactions_title' => 'Transaction #{{ transactionId }}',
    'back_to_list_of_transactions' => 'Back to list of transactions',
    'transactions_table' => [
        'list_of_purchased_nfts' => 'List of purchased NFTs ({{ nftCount }})',
        'nft_id' => 'NFT ID',
        'nft_name' => 'NFT Name',
        'quantity' => 'Quantity',
        'unit_price' => 'Unit Price',
        'total' => 'Total',
        'retry_transfer' => 'Retry transfer',
        'retry_transfer_all' => 'Retry all failed transfers',
    ],
    'view_stripe' => 'View more on stripe',
    'my_transactions_title' => 'List of my transactions',
    'retry' => [
        'success_message' => 'Retry was successful!',
    ],
    'failed' => 'Transfer failed because: {{ failedMessage }}',
    'blockchain_transaction' => 'Blockchain transaction',
];