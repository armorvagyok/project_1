<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\user;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function login(Request $request) {
        if(!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 1440);

        return response([
            'message' => 'success'
        ])->withCookie($cookie);
    }

    public function user() {
        return Auth::user();
    }

    public function logout(Request $request) {
        $cookie = Cookie::forget('jwt');
        $request->user()->tokens()->delete();

        return response([
            'message' => 'success'
        ])->withCookie($cookie);
    }
}