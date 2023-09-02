<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group(
    [
        'namespace' => 'App\Http\Controllers',
        'middleware' => 'api',
    ],
    function () {

        // dashboard routes 
        Route::group(
            [
                'prefix' => 'dashboard',
            ],
            function () {
                Route::apiResource('categories', CategoryController::class)->middleware(['auth:sanctum','AdminMiddleware']);
                Route::apiResource('products', ProductController::class);//->middleware(['auth:sanctum','AdminMiddleware']);
            }
        );



        Route::group(
            [
                'prefix' => 'site',
            ],
            function () {
                Route::post('register', 'AuthController@UserRegister');
                Route::post('login', 'AuthController@UserLogin');
            }
        );


    }
);