<?php

return [
    'title' => 'List of Items',
    'total_items' => '{{ countItems }} items',
    'total_items_1' => '{{ countItems }} item',
    'status' => [
        'unpublished' => 'Un-published',
        'published' => 'Published',
    ],
    'search_nft' => 'Search by NFT ID',
    'search_by_itemId_name' => 'Search by ID or name',
    'button_import' => 'Import Items',
    'create_title' => 'Add an item',
    'add_item' => 'Add an item',
    'messages' => [
        'success' => 'The item has been successfully added',
        'type_warning' => 'This NFT must have a scarcity',
        'main_item_warning' => '1 NFT must be selected as main image',
        'type_scarcities' => '1 scarcity can only have 1 NFT linked',
        'success_updated' => 'The item has been successfully updated',
    ],
    'created_at' => 'Created on {{createdAt}} by <a href="{{link}}" target="_blank" rel="noreferrer"><strong>{{creator}}</strong></a>',
    'updated_at' => 'Last updated on {{updatedAt}} by <a href="{{link}}" target="_blank" rel="noreferrer"><strong>{{editor}}</strong></a>',
    'back_to_index' => 'Back to list of items',
    'status_confirmation_modal' => [
        'to_un_published' => 'A un-publication date is already set for this item, are you sure you want to un-publish it now?',
        'to_published' => 'A publication date is already set for this item, are you sure you want to publish it now?',
    ],
    'edit_item' => 'Edit item - {{ itemId }}',
    'item_published_date_to' => 'Item finishing published date cannot be before item publishing starting date.',
];