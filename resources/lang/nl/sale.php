<?php

return [
    'tab_name' => 'Verkopen',
    'add_button' => 'Verkoop toevoegen',
    'create' => 'MAAK NIEUWE VERKOOP',
    'success_add_message' => 'De verkoop is succesvol verlopen',
    'success_closed_sale' => 'De verkoop is succesvol gesloten',
    'success_edit_message' => 'De verkoop is succesvol bijgewerkt',
    'type_sale_status' => [
        'direct_purchase' => 'Directe aankoop',
    ],
    'validation_messages' => [
        'date_validation' => 'U kunt geen twee verkopen in dezelfde periode hebben voor dezelfde NFT. Corrigeer de datum en het tijd a.u.b.',
        'remaining_copies_validation' => 'Het aantal moet gelijk zijn aan of lager zijn dan :remainingCopies',
        'sale_status' => 'De status van de verkoop is gewijzigd in Lopend en de wijzigingen kunnen niet worden opgeslagen.',
        'type' => 'Verkooptype wordt niet ondersteund.',
    ],
    'buttons' => [
        'tooltip' => 'Er blijven geen NFTs over. U kunt geen nieuwe verkoop toevoegen.',
        'tooltip_item' => 'Om een ​​verkoop toe te voegen, koppelt u deze NFT aan een ITEM',
    ],
    'statuses' => [
        'planned' => 'Gepland',
        'ongoing' => 'Lopend',
        'closed' => 'Gesloten',
    ],
    'edit' => 'VERKOOP BEWERKEN',
    'edit_status' => 'TOESTAND:',
    'success_deleted' => 'De verkoop werd met succes verwijderd',
    'pop_up_message' => 'Weet u zeker dat u deze verkoop definitief wilt verwijderen? Deze actie is niet omkeerbaar.',
    'delete_sale' => 'DEZE VERKOOP VERWIJDEREN',
    'modal' => [
        'title' => 'SLUIT DE VERKOOP',
        'body' => 'Weet u zeker dat u deze verkoop definitief wil sluiten? Deze actie is niet omkeerbaar.',
    ],
    'date_range_error' => 'De eindtijd en -datum van de verkoop mag niet vóór de starttijd en -datum van de verkoop vallen.',
    'date_rule' => 'De datum mag niet in het verleden liggen',
    'export_import' => [
        'button' => 'Verkoop aanmaken',
        'modal_title' => 'Importeer verkoop',
        'import_field' => 'Kies bestand of sleep',
        'download_template' => 'Sjabloon downloaden',
        'successfully_imported' => ':count  verkopen zijn succesvol aangemaakt',
        'token_ids_duplicate_error' => 'Rijen :duplicateRows zijn duplicaten. Per NFT-contractadres is slechts één verkoop toegestaan.',
    ],
];