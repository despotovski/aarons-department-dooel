<?php

return [
    'account' => [
        'title' => 'Create an Account',
        'buttons' => [
            'sign_up' => 'Sign up',
            'have_account' => 'Already have an account ?',
            'sign_in' => 'Sign in',
        ],
        'confirmation' => [
            'title' => 'We\'ve sent you an email !',
            'paragraph_1' => 'In order to be able to login on WawStreet, we sent you a verification link by email.',
            'paragraph_2' => 'Please check your email and verify your account. If you don\'t see our email, check your junk folder.',
            'button' => 'Back to login',
        ],
        'messages' => [
            'account_created' => 'You successfully created your account.',
        ],
        'account_validation' => [
            'success_validation' => 'Your account is now validated !',
            'success_validation_message' => 'Connect to Wawstreet and explore its collections.',
            'expired_link' => 'Your validation link has expired',
            'already_validated' => 'It seems that your account has already been validated. Please login with your credentials',
            'resend_link_button' => 'Resend validation link',
            'token_not_valid' => 'The email validation link has expired, please reset your password through the login page.',
        ],
    ],
    'status' => [
        'active' => 'Active',
        'inactive' => 'Inactive',
        'pending_validation' => 'Pending validation',
    ],
    'roles' => [
        'administrator' => 'Administrator',
        'buyer' => 'Buyer',
    ],
    'logs' => [
        'created_at' => 'Created on {{CreationDate}} by <a href="{{link}}" target="_blank" rel="noreferrer">{{userFullName}}</a>',
        'updated_at' => 'Last updated on {{LastUpdatedDate}} by <a href="{{link}}" target="_blank" rel="noreferrer">{{userFullName}}</a>',
        'terms_conditions_approved_at' => 'Terms and conditions latest approval on {{TermsAndConditionsLatestApprovalDate}}',
        'last_sign_in' => 'Last sign in {{LastSignInDate}}',
    ],
    'edit' => [
        'title' => 'Edit user',
        'success' => 'The user information has been successfully updated',
        'delete' => [
            'button' => 'DELETE THE USER ACCOUNT',
            'modal_message' => 'Are you sure you want to remove this user',
            'confirm_message' => 'The user has been successfully deleted',
            'cannot_delete_message' => 'This user cannot be deleted',
        ],
        'back_to_list' => 'Back to list of users',
    ],
    'back_to_dashboard' => 'Back to dashboard',
    'manage_users' => 'Manage users',
    'users' => 'users',
];