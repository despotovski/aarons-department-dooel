<?php

return [
    'manage_collections' => 'Collecties beheren',
    'status' => [
        'unpublished' => 'Niet gepubliceerd',
        'published' => 'Gepubliceerd ',
        'in_draft' => 'Ontwerp',
    ],
    'type' => [
        'public' => 'Openbaar',
        'private' => 'Privaat',
    ],
    'add' => [
        'create' => 'Nieuwe collectie maken',
        'save_and_publish' => 'OPSLAAN EN PUBLICEREN',
        'save_in_draft' => 'OPSLAAN IN ONTWERP',
        'success_draft' => 'De collectie is succesvol opgeslagen in ontwerp',
        'success_publish' => 'De collectie is succesvol gepubliceerd',
    ],
    'search_collection_name' => 'Zoeken op collectienaam',
    'search_creator' => 'Zoeken op kunstenaar',
    'collections' => 'collecties',
    'profile_image_details' => '<strong>Geaccepteerde bestandsindeling:</strong> JPEG, PNG, GIF <br> <strong>Maximale bestandsgrootte:</strong> 2 MB <br> <strong>Aanbevolen afbeeldingsgrootte:</strong> Nog te bepalen',
    'cover_image_details' => '<strong>Geaccepteerde bestandsindeling:</strong> JPEG, PNG, GIF <br> <strong>Maximale bestandsgrootte:</strong> 2 MB <br> <strong>Aanbevolen afbeeldingsgrootte:</strong> Nog te bepalen',
    'general_info' => 'Algemene informatie',
    'list_of_items' => 'Lijst van items',
    'edit_collection' => 'Een collectie bewerken –',
    'logs' => [
        'created_at' => 'Gemaakt op {{CreationDate}} door <a href="{{link}}">{{userFullName}}</a>',
        'updated_at' => 'Laatst bijgewerkt op {{LastUpdatedDate}} door <a href="{{link}}">{{userFullName}}</a>',
    ],
    'update_successful' => 'De collectie is succesvol bijgewerkt',
    'deletion' => [
        'button' => 'VERWIJDER DE COLLECTIE',
        'modal_title' => 'Collectie verwijderen',
        'modal_content' => 'Weet je zeker dat je deze collectie definitief wilt verwijderen? Deze actie is niet omkeerbaar.',
        'linked_to_items' => 'Je mag deze collectie niet verwijderen omdat deze nog aan minimaal één item is gekoppeld.',
        'success' => 'De collectie is succesvol verwijderd',
        'delete_warning' => 'U mag deze collectie niet verwijderen omdat deze nog gekoppeld is aan minimaal één item en minimaal één NFT.',
    ],
    'publish_message' => 'De collectie is succesvol gepubliceerd',
    'un_publish_message' => 'De publicatie van de collectie is met succes ongedaan gemaakt',
    'manage_categories' => 'Collectiescategorieën beheren',
    'select_category' => 'KIES CATEGORIE(S)',
    'collectionsItems' => [
        'collectionItemsCount' => 'Deze collectie heeft {{ collectionItemsCount }} items',
    ],
    'validation' => [
        'not_valid_contract_address' => 'Contractadres ongeldig',
    ],
    'public' => [
        'title' => 'COLLECTIES',
        'pieces' => '{{ count }} stuks te koop',
        'creations' => 'CREATIES',
        'about_title' => 'Over onze collecties',
        'about_description' => 'Het platform bestaat uit verschillende NFT collecties, van verschillende creators, die exclusief verkrijgbaar zijn op WawStreet. Elke collectie heeft een beperkt aantal NFT\'s en het aantal NFT\'s in een collectie verschilt van collectie tot collectie.',
        'empty_subcategories' => 'Selecteer hoofdcategorie',
        'no_subcategories' => 'Geen subcategorieën',
        'explore_collections' => 'Bekijk collecties',
        'search_by_name' => 'Zoeken op naam',
        'user' => [
            'types' => [
                'all' => 'Alle collecties',
                'complete_collections' => 'Complete collecties',
                'partial_collections' => 'Gedeeltelijke collecties',
            ],
            'sort' => [
                'highest_value' => 'Hoogste prijs',
                'purchase_date' => 'Aankoopdatum',
            ],
            'filter_label' => [
                'search_by_name' => 'Zoeken naar een collectie',
                'search_by_name_item' => 'Zoeken naar een item',
                'owned_items_checkbox' => 'Alleen items weergeven die ik bezit',
                'scarcity' => 'Schaarste',
                'sort_by' => 'Sorteren op',
                'type' => 'Weergave van collecties',
            ],
            'explore' => 'Ontdek',
            'back_to_my_collections' => 'TERUG NAAR MIJN COLLECTIES',
            'go_to_collection' => 'MEER OVER DEZE COLLECTIE',
            'owned_items_button' => 'Meer hierover',
            'header' => [
                'collection_value' => 'Waarde van mijn collectie: {{ value }} €',
                'collection_count' => 'Mijn collectie: {{ value }}',
                'info' => 'Hier wordt een link naar geplaatst zoals deze <a class="btn-link-primary" href="{{ link }}">Klik hier</a>',
            ],
        ],
    ],
    'public_content' => [
        'header' => [
            'key_figures' => 'Kerncijfers van deze collectie',
            'about_collection' => 'Over deze collectie',
            'figures' => [
                'creations' => 'Creatie(s)',
                'owners' => 'Houders',
                'floor_price' => 'Bodemprijs',
                'traded' => 'verhandeld',
            ],
        ],
        'card' => [
            'title' => 'Beschikbare schaarsten',
        ],
        'sortByLabels' => [
            'published_date_recent' => 'Datum van publicatie (Meest recente eerst)',
            'published_date_oldest' => 'Datum van publicatie (Oudste eerst)',
            'name_a_z' => 'Naam (A tot Z)',
            'name_z_a' => 'Naam (Z tot A)',
            'items_more_nfts' => 'Items met meer NFT\'s te verkoop',
        ],
        'filterLabels' => [
            'scarcity' => 'Schaarste',
            'price' => 'Prijs',
            'display_on_sale' => 'Toon alle creaties die te koop zijn',
            'display_new' => 'Toon alleen nieuwe creaties',
            'ive_got_it' => 'Alleen items weergeven die ik bezit',
        ],
        'unavailable' => 'Niet beschikbaar',
        'soon_for_sale' => 'Binnenkort te koop',
        'item_detail_pagination' => '{{current}} item uit {{last}}',
        'header_highlight' => 'Markeer in hoofdtitel',
        'pin_new_collection' => 'Pin in nieuwe collecties',
        'pin_top_collection' => 'Pin als top collectie',
        'all' => 'Alle',
        'home_page' => 'Startpagina',
        'my_collections_title' => 'Mijn Collecties op WawStreet',
        'my_collections_sub_title' => 'Zo cool, je hebt <strong class="text-light-green-2">{{ collectionsCount }} actieve collecties</strong>',
        'my_collections_sub_title_no_wallet' => 'Sluit uw wallet aan om uw collecties te bekijken',
    ],
    'value_of_collection' => 'De waarde van mijn verzameling is de som van de NFT\'s in mijn bezit en gewaardeerd tegen de prijs van de laatste verkoop op Wawstreet.',
];