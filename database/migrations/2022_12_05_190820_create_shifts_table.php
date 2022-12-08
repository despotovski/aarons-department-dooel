<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shifts', function (Blueprint $table) {
            $table->id();
            $table->date('date')->nullable();
            $table->float('hours')->nullable();
            $table->float('rate_per_hour')->nullable();
            $table->boolean('taxable');
            $table->boolean('status');
            $table->boolean('type');
            $table->float('total_paid');
            $table->unsignedBigInteger('employee_id');
            $table->date('paid_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shifts');
    }
}
