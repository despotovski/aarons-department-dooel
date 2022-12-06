<?php

return [
    'handlers' => [
        'file'     => env('LOG_HANDLER_FILE_ENABLED', true),
        'errorlog' => env('LOG_HANDLER_ERRORLOG_ENABLED', true),
    ],

    'rotate_max_files' => env('LOG_ROTATION_MAX_FILES', 0)
];
