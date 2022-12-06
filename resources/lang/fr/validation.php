<?php

return [
    'accepted' => 'Le :attribute doit être accepté',
    'accepted_if' => 'Le :attribute doit être accepté quand :other est :value.',
    'active_url' => 'Le :attribute n\'est pas une URL valide',
    'after' => 'Le :attribute doit être une date après le :date.',
    'after_or_equal' => 'Le :attribute doit être une date après ou égale au :date.',
    'alpha' => 'Le :attribute doit contenir uniquement des lettres.',
    'alpha_dash' => 'Le :attribute doit contenir uniquement des lettres, chiffres, tirets et tirets bas.',
    'alpha_num' => 'Le :attribute doit contenir uniquement des lettres et chiffres.',
    'array' => 'Le :attribute doit être un tableau.',
    'before' => 'Le :attribute doit être une date avant le :date.',
    'before_or_equal' => 'Le :attribute doit être une date avant ou égale au :date.',
    'between' => [
        'numeric' => 'Le :attribute doit être entre :min et :max.',
        'file' => 'Le :attribute doit être entre :min and et :max kilobytes.',
        'string' => 'Le :attribute doit comprendre entre :min et :max caractères.',
        'array' => 'Le :attribute doit comprendre entre :min et :max éléments.',
    ],
    'boolean' => 'Le champ :attribute doit être vrai ou faux.',
    'confirmed' => 'La confirmation :attribute ne correspond pas.',
    'current_password' => 'Le mot de passe est incorrect.',
    'date' => 'Le :attribute n\'est pas une date valide.',
    'date_equals' => 'Le :attribute doit être une date égale à :date.',
    'date_format' => 'Le :attribute ne correspond pas au format :format.',
    'declined' => 'Le :attribute doit être refusé.',
    'declined_if' => 'Le :attribute doit être refusé quand :other is :value.',
    'different' => 'Le :attribute et :other doivent être différents.',
    'digits' => 'Le :attribute doit faire :digits chiffres.',
    'digits_between' => 'Le :attribute doit faire entre :min et :max chiffres.',
    'dimensions' => 'Le :attribute a des dimensions d\'image invalides.',
    'distinct' => 'Le champ :attribute a une valeur dupliquée.',
    'email' => 'Le :attribute doit être une adresse e-mail valide.',
    'ends_with' => 'Le :attribute doit finir avec une des :values suivantes.',
    'enum' => 'Le :attribute sélectionné est invalide.',
    'exists' => 'Le :attribute sélectionné est invalide.',
    'file' => 'Le :attribute doit être un fichier.',
    'filled' => 'Le champ :attribute doit avoir une valeur.',
    'gt' => [
        'numeric' => 'Le :attribute doit être plus grand que :value.',
        'file' => 'Le :attribute doit être plus grand que :value kilobytes.',
        'string' => 'Le :attribute doit être plus grand que :value characters.',
        'array' => 'Le :attribute doit avoir plus de :value éléments.',
    ],
    'gte' => [
        'numeric' => 'Le :attribute doit être plus grand ou égal à :value.',
        'file' => 'Le :attribute doit être plus grand ou égal à :value kilobytes.',
        'string' => 'Le :attribute doit être plus grand ou égal à :value caractères.',
        'array' => 'Le :attribute doit avoir :value éléments ou plus.',
    ],
    'image' => 'Le :attribute doit être une image.',
    'in' => 'Le :attribute sélectionné est invalide.',
    'in_array' => 'Le champ :attribute n\'existe pas dans :other.',
    'integer' => 'Le :attribute doit être un entier.',
    'ip' => 'Le :attribute doit être une adresse IP valide.',
    'ipv4' => 'Le :attribute doit être une adresse IPv4 valide.',
    'ipv6' => 'Le :attribute doit être une adresse IPv6 valide.',
    'json' => 'Le :attribute doit être une chaine JSON valide.',
    'lt' => [
        'numeric' => 'Le :attribute doit être plus petit que :value.',
        'file' => 'Le :attribute doit être plus petit que :value kilobytes.',
        'string' => 'Le :attribute doit être plus petit que :value caractères.',
        'array' => 'Le :attribute doit avoir moins que :value éléments.',
    ],
    'lte' => [
        'numeric' => 'Le :attribute doit être plus petit ou égale à :value.',
        'file' => 'Le :attribute doit être plus petit ou égale à :value kilobytes.',
        'string' => 'Le :attribute doit être plus petit ou égale à :value caractères.',
        'array' => 'Le :attribute ne doit pas avoir plus de :value éléments.',
    ],
    'mac_address' => 'Le :attribut doit être une adresse MAC valide.',
    'max' => [
        'numeric' => 'Le :attribute ne doit pas être plus grand que :max.',
        'file' => 'Le :attribute ne doit pas être plus grand que :max kilobytes.',
        'string' => 'Le :attribute ne doit pas être plus grand que :max caractères.',
        'array' => 'Le :attribute ne doit pas avoir plus de :max caractères.',
    ],
    'mimes' => 'Le :attribute doit être un fichier de type :values.',
    'mimetypes' => 'Le :attribute doit être un fichier de type :values.',
    'min' => [
        'numeric' => 'Le :attribute doit être au moins :min.',
        'file' => 'Le :attribute doit être au moins :min kilobytes.',
        'string' => 'Le :attribute doit être au moins :min caractères.',
        'array' => 'Le :attribute doit avoir au moins :min éléments.',
    ],
    'multiple_of' => 'Le :attribute doit être un multiple de :value',
    'not_in' => 'Le :attribute sélectionné est invalide.',
    'not_regex' => 'Le format de :attribute est invalide.',
    'numeric' => 'Le :attribute doit être un nombre',
    'password' => 'Le mot de passe est incorrect.',
    'present' => 'Le champ :attribute doit être présent.',
    'prohibited' => 'Le champ :attribute est interdit.',
    'prohibited_if' => 'Le champ :attribute est interdit quand :other est :value.',
    'prohibited_unless' => 'Le champ :attribute est interdit sauf si :other est dans :values.',
    'prohibits' => 'Le champ :attribute empêche :other d’être present.',
    'regex' => 'Le format de :attribute est invalide.',
    'required' => 'Le champ :attribute est requis.',
    'required_array_keys' => 'Le champ :attribute  doit être complété pour: :values.',
    'required_if' => 'Le champ :attribute est requis quand :other est :value.',
    'required_unless' => 'Le champ :attribute est requis sauf si :other est dans :values.',
    'required_with' => 'Le champ :attribute est requis quand :values est présent.',
    'required_with_all' => 'Le champ :attribute est requis quand :values sont présentes',
    'required_without' => 'Le champ :attribute est requis quand :values n\'est pas présent.',
    'required_without_all' => 'Le champ :attribute est requis quand aucun des :values ne sont présents.',
    'same' => 'Le :attribute et :other doivent correspondre.',
    'size' => [
        'numeric' => 'Le :attribute doit faire :size.',
        'file' => 'Le :attribute doit faire :size kilobytes.',
        'string' => 'Le :attribute doit faire :size caractères.',
        'array' => 'Le :attribute doit contenir :size éléments.',
    ],
    'starts_with' => 'Le :attribute doit commencer avec une des :values suivantes.',
    'string' => 'Le :attribute doit être une chaine de caractères.',
    'timezone' => 'Le :attribute doit être une zone valide.',
    'unique' => 'Le :attribute est déjà pris.',
    'uploaded' => 'Le téléchargement du :attribute a échoué.',
    'url' => 'Le format du :attribute est invalide',
    'uuid' => 'Le :attribute doit être un UUID valide.',
    'custom' => [
        'attribute-name' => [
            'rule-name' => null,
        ],
    ],
    'attributes' => null,
    'form_submit_error' => 'Il y a eu une erreur. Veuillez vérifier les champs ci-dessus avant de soumettre à nouveau le formulaire.',
    'file_name_too_long' => 'Le nom de ce fichier est trop long.',
];