<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/**
 * USER
 */
Route::resource('users', UserController::class);


/**
 * POST
 */
Route::get('posts', [PostController::class, 'index']);
Route::get('posts/{post}', [PostController::class, 'show']);
Route::post('posts/search', [PostController::class, 'search']);
//with auth
Route::group(['middleware' => 'auth'], function ($router) {
    Route::get('posts/create', [PostController::class, 'create']);
    Route::post('posts', [PostController::class, 'store']);
    Route::get('posts/{post}/edit', [PostController::class, 'edit']);
    Route::put('posts/{post}', [PostController::class, 'update']);
    Route::delete('posts/{post}', [PostController::class, 'destroy']);
});

/** Auth route with JWT */
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});
