<?php

use App\Http\Controllers\ProductoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {

    return view('productos');

});

Route::get('/productos', function() {

    return view('productos');

});

// Route::get('/producto', [ProductoController::class, 'index']);
// Route::post('/producto', [ProductoController::class, 'store']);
// Route::put('/producto/{producto}', [ProductoController::class, 'update']);
// Route::delete('/producto/{producto}', [ProductoController::class, 'destroy']);

Route::resource('/producto', ProductoController::class)->only('index', 'store', 'update', 'destroy');