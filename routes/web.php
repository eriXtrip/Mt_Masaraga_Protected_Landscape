<?php

use Illuminate\Support\Facades\Route;

Route::get('/admin/{path?}', function () {
    return view('admin');
})->where('path', '.*');

Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');
