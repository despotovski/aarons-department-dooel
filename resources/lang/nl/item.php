<?php

return [
    'title' => 'Lijst van items',
    'total_items' => '{{ countItems }} items',
    'total_items_1' => '{{ countItems }} item',
    'status' => [
        'unpublished' => 'Niet gepubliceerd',
        'published' => 'gepubliceerd',
    ],
    'search_nft' => 'Zoeken op NFT-ID',
    'search_by_itemId_name' => 'Zoeken op item-ID of naam',
    'button_import' => 'Items importeren',
    'create_title' => 'Voeg een item toe',
    'add_item' => 'Voeg een item toe',
    'messages' => [
        'success' => 'Het item is succesvol toegevoegd',
        'type_warning' => 'Deze NFT moet een schaarsheid hebben',
        'main_item_warning' => '1 NFT moet worden geselecteerd als hoofdafbeelding',
        'type_scarcities' => '1 schaarste kan maar aan 1 NFT gekoppeld worden',
        'success_updated' => 'Het item werd succesvol bijgewerkt',
    ],
    'created_at' => 'Gemaakt op {{createdAt}} door <a href="{{link}}" target="_blank" rel="noreferrer"><strong>{{creator}}</strong></a>',
    'updated_at' => 'Laatst bijgewerkt op {{updatedAt}} door <a href="{{link}}" target="_blank" rel="noreferrer"><strong>{{editor}}</strong></a>',
    'back_to_index' => 'Terug naar lijst met items',
    'status_confirmation_modal' => [
        'to_un_published' => 'Er is al een publicatiedatum voor dit item ingesteld. Weet u zeker dat u de publicatie ervan nu ongedaan wil maken?',
        'to_published' => 'Er is al een publicatiedatum ingesteld voor dit item, weet u zeker dat u het nu wil publiceren?',
    ],
    'edit_item' => 'Item bewerken - {{ itemId }}',
    'item_published_date_to' => 'De publicatiedatum van het item kan niet eerder zijn dan de startdatum van de publicatie van het item.',
];