<?php

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

// Routes for players page
Route::get('/api/players', 'PlayersController@getPlayersList');
Route::get('/players', 'PlayersController@getPlayers');

// Routes for managers page
Route::get('/managers', 'ManagersController@create');
Route::get('/managers/show', 'ManagersController@show');
Route::post('/managers/store', 'ManagersController@store');

// Routes for users
Route::get('/signup', 'UsersController@create');
Route::get('/login', 'UsersController@login');

// User routes
Route::get('/test_manager_get', 'UsersController@test_manager_get');

// Auth routes
Route::post('/check/auth', 'UsersController@checkAuth');
Route::post('/logout','LoginController@logout');
Auth::routes();