<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
         $schedule->command('item:update-status')->dailyAt('00:01');
         $schedule->command('sale:start-sale')->everyMinute();
         $schedule->command('sale:update-status-closed')->everyMinute();
         $schedule->command('order:expired-session')->everyMinute();
         $schedule->command('blockchain:check-transaction-receipt')->everyMinute();
         $schedule->command('blockchain:check-missing-transaction')->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
