<?php

return [
    'quantity_error' => 'The quantity cannot exceed :quantity',
    'home_button' => 'BACK TO HOME PAGE',
    'cancelled' => [
        'title' => 'The transaction has been cancelled',
        'content' => 'Hey, {{user}}, unfortunately, the transaction was cancelled. Please try again. If this error persists, please contact us.',
    ],
    'successful' => [
        'title' => 'Transaction Successful !',
        'content' => 'Hey, {{user}}! Thank you for purchasing an NFT on our platform! Your payment has been confirmed.',
    ],
    'redirecting' => 'Redirecting to stripe...',
    'basket' => [
        'add_to_basket_success' => 'The nft has been added to your basket.',
        'add_to_basket_failed' => 'We could not add the nft to your basket.',
        'remove_from_basket' => 'The NFT was removed from your basket.',
        'update_basket' => 'The basket has been updated.',
        'basket_info' => 'Order info',
        'total' => 'Total',
        'empty_basket' => 'There are no NFTs in your cart',
        'sale_closed' => 'This NFT is not available anymore',
        'empty' => 'Basket is empty',
        'title' => 'Your basket',
    ],
    'statuses' => [
        'payment_statuses' => [
            'successful' => 'Successful',
            'failed' => 'Failed',
        ],
        'transaction_statuses' => [
            'non_applicable' => 'Not-applicable',
            'pending' => 'Pending',
            'successful' => 'Successful',
            'failed' => 'Failed',
        ],
    ],
];