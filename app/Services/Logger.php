<?php

namespace App\Services;

use Monolog\Formatter\LogstashFormatter;
use Monolog\Handler\ErrorLogHandler;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Logger as MonologLogger;
use Monolog\Processor\WebProcessor;

/**
 * @property ErrorLogHandler errorLogHandler
 * @property StreamHandler streamLogHandler
 * @property MonologLogger log
 */
class Logger
{
    public const HANDLER_FILE = 'file';
    public const HANDLER_ERRORLOG = 'errorlog';

    private $handlerTypes = [];

    /**
     * FileLogger constructor.
     *
     * @throws \Exception
     */
    public function __construct()
    {
        $this->log = new MonologLogger('default');

        $this->errorLogHandler = new ErrorLogHandler();
        $this->streamLogHandler = new RotatingFileHandler(
            storage_path('logs') . '/default.log',
            config('logs.rotate_max_files'),
            MonologLogger::DEBUG
        );

        $this->setHandlers();
    }

    /**
     * @param $filename
     *
     * @throws \Exception
     */
    public function setLogFile($filename)
    {
        $this->streamLogHandler = new RotatingFileHandler(
            storage_path('logs') . '/' . $filename . '.log',
            config('logs.rotate_max_files'),
            MonologLogger::DEBUG
        );

        $this->setHandlers();
    }

    public function logInfo($message, $context = [])
    {
        $this->log->info($message, $context);
    }

    public function logError($message, $context = [])
    {
        if (!is_array($context)) {
            $context = [$context];
        }
        $this->log->error($message, $context);
    }

    protected function setHandlers()
    {
        $this->log->setHandlers([]);

        $this->streamLogHandler->pushProcessor(new WebProcessor());
        $this->errorLogHandler->setFormatter(new LogstashFormatter(config('app.name')));

        if (
            config('logs.handlers.file') && (empty($this->handlerTypes) || in_array(
                self::HANDLER_FILE,
                $this->handlerTypes
            ))
        ) {
            $this->log->pushHandler($this->streamLogHandler);
        }
        if (
            config('logs.handlers.errorlog') && (empty($this->handlerTypes) || in_array(
                self::HANDLER_ERRORLOG,
                $this->handlerTypes
            ))
        ) {
            $this->log->pushHandler($this->errorLogHandler);
        }
    }

    /**
     * @param array $handlerTypes
     */
    public function setHandlerTypes($handlerTypes = [])
    {
        $this->handlerTypes = $handlerTypes;
        $this->setHandlers();
    }
}
