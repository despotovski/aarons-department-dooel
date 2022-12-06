<?php

return [
    'title' => 'Liste d\'objets',
    'total_items' => '{{ countItems }} éléments',
    'total_items_1' => '{{ countItems }} élément',
    'status' => [
        'unpublished' => 'Non publié',
        'published' => 'Publié',
    ],
    'search_nft' => 'Rechercher par ID NFT',
    'search_by_itemId_name' => 'Rechercher par ID de création ou par nom',
    'button_import' => 'Importer des créations',
    'create_title' => 'Ajouter un item',
    'add_item' => 'Ajouter un item',
    'messages' => [
        'success' => 'la création a été ajoutée avec succès',
        'type_warning' => 'Ce NFT doit avoir une rareté',
        'main_item_warning' => '1 NFT doit être sélectionné comme image principale',
        'type_scarcities' => '1 rareté ne peut avoir qu\'un seul NFT lié',
        'success_updated' => 'La création a été mise à jour avec succès.',
    ],
    'created_at' => 'Créé le {{createdAt}} par <a href="{{link}}" target="_blank" rel="noreferrer"><strong>{{creator}}</strong></a>',
    'updated_at' => 'Dernière mise à jour le {{updatedAt}} par <a href="{{link}}" target="_blank" rel="noreferrer"><strong>{{editor}}</strong></a>',
    'back_to_index' => 'Retour à la liste des créations',
    'status_confirmation_modal' => [
        'to_un_published' => 'Une date de dépublication est déjà définie pour cet item, êtes-vous sûr de vouloir le dépublier maintenant ?',
        'to_published' => 'Une date de publication est déjà définie pour cet item, êtes-vous sûr de vouloir le publier maintenant ?',
    ],
    'edit_item' => 'Modifier l\'item - {{ itemId }}',
    'item_published_date_to' => 'La date de fin de publication de l\'item ne peut pas être plus tôt que la date de début de publication de l\'élément.',
];