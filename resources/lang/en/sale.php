<?php

return [
    'tab_name' => 'Sales',
    'add_button' => 'Add sale',
    'create' => 'CREATE NEW SALE',
    'success_add_message' => 'The sale has successfully been created',
    'success_closed_sale' => 'The sale has successfully been closed',
    'success_edit_message' => 'The sale has successfully been updated',
    'type_sale_status' => [
        'direct_purchase' => 'Direct purchase',
    ],
    'validation_messages' => [
        'date_validation' => 'You cannot have two sales at the same period for the same NFT. Please rectify the date and time range',
        'remaining_copies_validation' => 'The quantity must be equal or lower than :remainingCopies',
        'sale_status' => 'Sale\'s status has been changed to Ongoing, and the changes can not be saved.',
        'type' => 'Sale type is not supported.',
    ],
    'buttons' => [
        'tooltip' => 'No remaining NFT. You cannot add new sale.',
        'tooltip_item' => 'To add a sale, link this NFT to an ITEM',
    ],
    'statuses' => [
        'planned' => 'Planned',
        'ongoing' => 'Ongoing',
        'closed' => 'Closed',
    ],
    'edit' => 'EDIT SALE',
    'edit_status' => 'STATUS:',
    'success_deleted' => 'The sale has been successfully deleted',
    'pop_up_message' => 'Are you sure you want to permanently delete this sale? This action is not reversible.',
    'delete_sale' => 'DELETE THIS SALE',
    'modal' => [
        'title' => 'CLOSE SALE',
        'body' => 'Are you sure you want to permanently close this sale? This action is not reversible.',
    ],
    'date_range_error' => 'Sale end time and date cannot be before sale start time and date.',
    'date_rule' => 'The date should not be set in the past',
    'export_import' => [
        'button' => 'Create sales',
        'modal_title' => 'Import Sales',
        'import_field' => 'Choose file or drag\'n\'drop',
        'download_template' => 'Download template',
        'successfully_imported' => ':count Sales has been successfully created',
        'token_ids_duplicate_error' => 'Rows :duplicateRows are duplicates. Only one sale per NFT-Contract address is allowed.',
    ],
];