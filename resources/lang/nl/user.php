<?php

return [
    'account' => [
        'title' => 'Account aanmaken',
        'buttons' => [
            'sign_up' => 'AANMELDEN',
            'have_account' => 'Heb je al een account?',
            'sign_in' => 'AANMELDEN',
        ],
        'confirmation' => [
            'title' => 'We hebben je een e-mail gestuurd!',
            'paragraph_1' => 'Om te kunnen inloggen op WawStreet hebben we je per e-mail een verificatielink gestuurd.',
            'paragraph_2' => 'Controleer uw e-mail en verifieer uw account. Als u onze e-mail niet ziet, controleer dan uw spam map.',
            'button' => 'TERUG NAAR INLOGGEN',
        ],
        'messages' => [
            'account_created' => 'U heeft uw account succesvol aangemaakt.',
        ],
        'account_validation' => [
            'success_validation' => 'Uw account is nu gevalideerd!',
            'success_validation_message' => 'Log in op Wawstreet en bekijk de collecties.',
            'expired_link' => 'Uw activatielink is verlopen',
            'already_validated' => 'Het lijkt erop dat uw account al is geactiveerd. Gelieve in te loggen met uw inloggegevens',
            'resend_link_button' => 'ACTIVATIELINK OPNIEUW VERZENDEN',
            'token_not_valid' => 'De activatielink is verlopen. Stel uw wachtwoord opnieuw in via de inlogpagina.',
        ],
    ],
    'status' => [
        'active' => 'Actief',
        'inactive' => 'Inactief',
        'pending_validation' => 'In afwachting van activatie',
    ],
    'roles' => [
        'administrator' => 'Beheerder',
        'buyer' => 'Koper',
    ],
    'logs' => [
        'created_at' => 'Gemaakt op {{CreationDate}} door <a href="{{link}}" target="_blank" rel="noreferrer">{{userFullName}}</a>',
        'updated_at' => 'Laatst bijgewerkt op {{LastUpdatedDate}} door <a href="{{link}}" target="_blank" rel="noreferrer">{{userFullName}}</a>',
        'terms_conditions_approved_at' => 'Algemene voorwaarden laatste goedkeuring op {{TermsAndConditionsLatestApprovalDate}}',
        'last_sign_in' => 'Laatste aanmelding {{LastSignInDate}}',
    ],
    'edit' => [
        'title' => 'Bewerk gebruiker',
        'success' => 'Gebruikersinformatie werd succesvol bijgewerkt',
        'delete' => [
            'button' => 'GEBRUIKERSACCOUNT VERWIJDEREN',
            'modal_message' => 'Weet u zeker dat u deze gebruiker wil verwijderen?',
            'confirm_message' => 'De gebruiker is succesvol verwijderd',
            'cannot_delete_message' => 'Deze gebruiker kan niet worden verwijderd',
        ],
        'back_to_list' => 'Terug naar gebruikerslijst',
    ],
    'back_to_dashboard' => 'Terug naar dashboard',
    'manage_users' => 'gebruikers beheren',
    'users' => 'gebruikers',
];