<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NumberController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NumberPreferenceController;

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

Route::get('/', [WelcomeController::class, 'index']);

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('customer', CustomerController::class)
        ->only([
            'index',
            'show',
            'store',
            'update',
            'destroy'
        ]);

    Route::resource('number', NumberController::class)
        ->only([
            'store',
            'update',
            'destroy'
        ]);

    Route::resource('number_preference', NumberPreferenceController::class)
        ->only([
            'update',
        ]);
});
