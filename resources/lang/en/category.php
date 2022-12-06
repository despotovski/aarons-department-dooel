<?php

return [
    'create_category_title' => 'Create new category',
    'status' => [
        'active' => 'Active',
        'inactive' => 'Inactive',
    ],
    'index_category_title' => 'Manage categories',
    'add_category' => 'Create Category',
    'total_categories' => '{{ count }} categories',
    'created_by' => 'Created on {{ date }} by <a href="{{link}}">{{creator}}</a>',
    'updated_by' => 'Last updated on {{ date }} by <a href="{{link}}">{{editor}}</a>',
    'delete_category' => 'DELETE THE CATEGORY',
    'messages' => [
        'success_updated' => 'The category has been successfully updated',
        'success_create' => 'The category has been successfully created',
        'delete' => [
            'confirm_delete' => 'CONFIRMATION OF DELETION',
            'title_delete' => 'Are you sure you want to permanently remove this category? This action is not reversible.',
            'success_delete' => 'The category has been successfully deleted',
            'delete_warning' => 'You are not allowed to delete this category because it is still linked to at least one collection.',
        ],
        'confirmation_publication' => 'CONFIRMATION OF PUBLICATION',
        'confirmation_unpublication' => 'CONFIRMATION OF UNPUBLICATION',
        'collection_links' => 'Published collection is already linked with this category.',
    ],
    'sub_category_tab' => 'Sub-categories',
    'category_tab' => 'Category',
    'add_sub_category' => 'Create Sub-category',
    'edit_category' => 'Edit Category - {{ categoryName }}',
    'back_to_list_categories' => 'Back to list of categories',
    'category_name_exist' => 'This sub-category already exists',
    'name_exist' => 'This category name already exists',
    'image_details' => '<strong>Files format accepted:</strong> JPEG, PNG, GIF <br> <strong>Maximum file size:</strong> 2 MB <br> <strong>Recommended image size:</strong>  To be defined',
];