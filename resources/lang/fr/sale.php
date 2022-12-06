<?php

return [
    'tab_name' => 'Ventes',
    'add_button' => 'Ajouter une vente',
    'create' => 'CRÉER UNE NOUVELLE VENTE',
    'success_add_message' => 'La vente a été créée avec succès',
    'success_closed_sale' => 'La vente a été clôturée avec succès',
    'success_edit_message' => 'La vente a été mise à jour avec succès',
    'type_sale_status' => [
        'direct_purchase' => 'Achat direct',
    ],
    'validation_messages' => [
        'date_validation' => 'Vous ne pouvez pas avoir deux ventes à la même période pour le même NFT. Veuillez rectifier la date et la plage horaire',
        'remaining_copies_validation' => 'La quantité doit être égale ou inférieure à :remainingCopies',
        'sale_status' => 'Le statut de la vente a été modifié en cours et les modifications ne peuvent pas être enregistrées.',
        'type' => 'Le type de vente n\'est pas pris en charge.',
    ],
    'buttons' => [
        'tooltip' => 'Aucun NFT restant. Vous ne pouvez pas ajouter de nouvelle vente.',
        'tooltip_item' => 'Pour ajouter une vente, associez ce NFT à un ITEM',
    ],
    'statuses' => [
        'planned' => 'Prévu',
        'ongoing' => 'En cours',
        'closed' => 'Fermé',
    ],
    'edit' => 'MODIFIER LA VENTE',
    'edit_status' => 'STATUT:',
    'success_deleted' => 'La vente a été supprimée avec succès',
    'pop_up_message' => 'Êtes-vous sûr de vouloir supprimer définitivement cette vente ? Cette action n\'est pas réversible.',
    'delete_sale' => 'SUPPRIMER CETTE VENTE',
    'modal' => [
        'title' => 'FERMER LA VENTE',
        'body' => 'Êtes-vous sûr de vouloir clôturer définitivement cette vente ? Cette action n\'est pas réversible.',
    ],
    'date_range_error' => 'L\'heure et la date de fin de la vente ne peuvent pas être avant l\'heure et à la date de début de la vente.',
    'date_rule' => 'La date ne peut pas être fixée dans le passé',
    'export_import' => [
        'button' => 'Créer des ventes',
        'modal_title' => 'Importer les ventes',
        'import_field' => 'Choisissez un fichier ou faites un glisser-déposer',
        'download_template' => ' Télécharger le modèle',
        'successfully_imported' => ':count ventes ont été créées avec succès',
        'token_ids_duplicate_error' => ':duplicateRows sont des doublons. Une seule vente par adresse NFT-Contract est autorisée.',
    ],
];