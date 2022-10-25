<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdministradorController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('administradors',[AdministradorController::class, 'index']);

Route::post('administradors/register',[AdministradorController::class, 'create']);

Route::put('administradors/actulizacion',[AdministradorController::class, 'update']);

Route::delete('administradors/eliminacion',[AdministradorController::class, 'destroy']);
