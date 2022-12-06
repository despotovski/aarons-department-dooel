<?php

return [
    'account' => [
        'title' => 'Créer un compte',
        'buttons' => [
            'sign_up' => 'S\'INSCRIRE',
            'have_account' => 'Vous avez déjà un compte ?',
            'sign_in' => 'S\'IDENTIFIER',
        ],
        'confirmation' => [
            'title' => 'Nous vous avons envoyé un e-mail !',
            'paragraph_1' => 'Afin de pouvoir vous connecter sur WawStreet, nous vous avons envoyé un lien de vérification par email.',
            'paragraph_2' => 'Veuillez consulter votre e-mail et vérifier votre compte. Si vous ne voyez pas notre e-mail, consultez votre dossier de courrier indésirable.',
            'button' => 'RETOUR CONNEXION',
        ],
        'messages' => [
            'account_created' => 'Vous avez créé votre compte avec succès.',
        ],
        'account_validation' => [
            'success_validation' => 'Votre compte est maintenant validé !',
            'success_validation_message' => 'Connectez-vous à Wawstreet et explorer ses collections.',
            'expired_link' => 'Votre lien de validation a expiré',
            'already_validated' => 'Il semble que votre compte ait déjà été validé. Veuillez vous connecter avec vos identifiants',
            'resend_link_button' => 'RENVOYER LE LIEN DE VALIDATION',
            'token_not_valid' => 'LE JETON N\'EST PAS VALIDE',
        ],
    ],
    'status' => [
        'active' => 'Actif',
        'inactive' => 'blockchain',
        'pending_validation' => 'Validation en attente',
    ],
    'roles' => [
        'administrator' => 'Administrateur',
        'buyer' => 'Acheteur',
    ],
    'logs' => [
        'created_at' => 'Créé le {{CreationDate}} par <a href="{{link}}" target="_blank" rel="noreferrer">{{userFullName}}</a>',
        'updated_at' => 'Dernière mise à jour le {{LastUpdatedDate}} par <a href="{{link}}" target="_blank" rel="noreferrer">{{userFullName}}</a>',
        'terms_conditions_approved_at' => 'Dernière approbation des conditions générales le {{TermsAndConditionsLatestApprovalDate}}',
        'last_sign_in' => 'Dernière connexion {{LastSignInDate}}',
    ],
    'edit' => [
        'title' => 'Modifier l\'utilisateur',
        'success' => 'Les informations de l\'utilisateur ont été mises à jour avec succès',
        'delete' => [
            'button' => 'SUPPRIMER LE COMPTE UTILISATEUR',
            'modal_message' => 'Êtes-vous sûr de vouloir supprimer cet utilisateur',
            'confirm_message' => 'L\'utilisateur a été supprimé avec succès',
            'cannot_delete_message' => 'Cet utilisateur ne peut pas être supprimé',
        ],
        'back_to_list' => 'Retour à la liste des utilisateurs',
    ],
    'back_to_dashboard' => 'Retour au tableau de bord',
    'manage_users' => 'Gérer les utilisateurs',
    'users' => 'utilisateurs',
];