<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\AuthController;

Route::group(['prefix' => 'posts'], function() {
    Route::get("/", [PostController::class, "get"]);
    Route::post("/create", [PostController::class, "create"]);
    Route::put("/update/{post}", [PostController::class, "update"]);
    Route::delete("/delete/{post}", [PostController::class, "delete"]);
    Route::get("/search", [PostController::class, "search"]);
});

Route::group(['prefix' => 'users'], function() {
    Route::get("/", [UserController::class, "get"]);
    Route::post("/create", [UserController::class, "create"]);
    Route::put("/update/{user}", [UserController::class, "update"]);
    Route::delete("/delete/{user}", [UserController::class, "delete"]);
    Route::get("/search", [UserController::class, "search"]);
});

Route::group(['prefix' => 'comments'], function() {
    Route::get("/", [CommentController::class, "get"]);
    Route::post("/create", [CommentController::class, "create"]);
    Route::put("/update/{comment}", [CommentController::class, "update"]);
    Route::delete("/delete/{comment}", [CommentController::class, "delete"]);
    Route::get("/search", [CommentController::class, "search"]);
});

Route::group(['prefix' => 'follows'], function() {
    Route::get("/", [FollowController::class, "get"]);
    Route::post("/create", [FollowController::class, "create"]);
    Route::put("/update/{follow}", [FollowController::class, "update"]);
    Route::delete("/delete/{follow}", [FollowController::class, "delete"]);
    Route::get("/search", [FollowController::class, "search"]);
});

Route::group(['prefix' => 'likes'], function() {
    Route::get("/", [LikeController::class, "get"]);
    Route::post("/create", [LikeController::class, "create"]);
    Route::put("/update/{like}", [LikeController::class, "update"]);
    Route::delete("/delete/{like}", [LikeController::class, "delete"]);
    Route::get("/search", [LikeController::class, "search"]);
});

Route::group(['prefix' => 'messages'], function() {
    Route::get("/", [MessageController::class, "get"]);
    Route::post("/create", [MessageController::class, "create"]);
    Route::put("/update/{message}", [MessageController::class, "update"]);
    Route::delete("/delete/{message}", [MessageController::class, "delete"]);
    Route::get("/search", [MessageController::class, "search"]);
});

Route::group(['prefix' => 'tags'], function() {
    Route::get("/", [TagController::class, "get"]);
    Route::post("/create", [TagController::class, "create"]);
    Route::put("/update/{tag}", [TagController::class, "update"]);
    Route::delete("/delete/{tag}", [TagController::class, "delete"]);
    Route::get("/search", [TagController::class, "search"]);
});

Route::post("/login", [AuthController::class, "login"]);

Route::middleware('auth:sanctum')->group(function() {
    Route::get("/user", [AuthController::class, "user"]);
    Route::post("/logout", [AuthController::class, "logout"]);
});