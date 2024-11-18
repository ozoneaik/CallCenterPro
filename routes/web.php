<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::post('/test', function(Request $request){
    return response()->json(['message' => 'Hello World', 'data' => $request->all()]);
})->name('test');

Route::middleware(['auth','verified'])->group(function(){
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/hello',function(){
        return response()->json(['message' => 'สวัสดี']);
    });
    Route::get('/home', function () {
        return Inertia::render('Home',['name' => 'สวัสดี']);
    })->name('home');
    Route::get('/messages/{roomId}/{roomName}', function($roomId,$roomName){
        return Inertia::render('Messages/Messages',['roomId' => $roomId,'roomName' => $roomName]);
    })->name('messages');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
