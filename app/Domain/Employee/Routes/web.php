<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('employee')
    ->group(function () {

        Route::get('/', 'EmployeeController@index')->name('employee.index');
        Route::get('/get', 'EmployeeController@get')->name('employee.get');
        Route::get('{employee}/general-info', 'EmployeeController@show')->name('employee.show');
        Route::get('{employee}/payments', 'EmployeeController@getEmployeePayments')->name('employee.payments');
        Route::post('/import', 'ImportController@import')->name('employee.import');
    });

Route::prefix('shift')
    ->group(function () {

        Route::get('/', 'ShiftController@index')->name('shift.index');
        Route::get('/get', 'ShiftController@get')->name('shift.get');
        Route::get('/create', 'ShiftController@create')->name('shift.create');
        Route::post('/', 'ShiftController@store')->name('shift.store');
        Route::delete('/{shift}', 'ShiftController@destroy')->name('shift.destroy');
    });
