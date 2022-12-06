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
    //->middleware('auth')
    ->group(function () {

        Route::get('/', 'EmployeeController@index')->name('employee.index');
        Route::get('/get', 'EmployeeController@get')->name('employee.get');
        Route::get('{employee}/general-info', 'EmployeeController@show')->name('employee.show');
        Route::get('{employee}/payments', 'EmployeeController@getEmployeePayments')->name('employee.payments');
        Route::post('/import', 'ImportController@import')->name('employee.import');
    });
