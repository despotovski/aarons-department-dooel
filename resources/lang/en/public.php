<?php

return [
    'contact' => [
        'title' => 'Contact us',
        'sub_title' => 'Ask a question, give us some feedback, or contact the team. We will get back to you as soon as we can!',
        'request_type' => [
            'technical_questions' => 'Technical questions',
            'practical_questions' => 'Practical questions',
            'purchase' => 'Purchase',
            'others' => 'Others',
        ],
        'message_description' => 'Please enter the details of your request. <br/>A member of our support staff will respond as soon as possible',
        'success_message' => 'Thanks for contacting us. We’ll be in touch with you shortly.',
        'validation_messages' => [
            'files_count' => 'You cannot upload more than 5 files',
            'files_size' => 'Maximum size per file is 2MB',
            'files_format_not_allowed' => 'Image or file format is not allowed. An empty .docx file may cause this issue',
        ],
        'file_upload_details' => '<strong>Files format accepted:</strong> JPEG, PNG, GIF, PDF, DOCX <br> <strong>Maximum size per file:</strong> 2 MB',
    ],
];