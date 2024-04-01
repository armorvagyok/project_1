<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\StoreUsers;

class UserController extends Controller
{
    public function get() {
        $users = User::all();
        return response()->json($users);
    }

    public function create(Request $request) {
        $created = User::create($request->all());
        return response()->json($created, 201);
    }

    public function update(User $user, Request $request) {
        $user->update($request->all());
        return response()->json($user);
    }

    public function delete(User $user) {
        $user->delete();
        return response()->json("DELETED", 204);
    }

    public function search(Request $request) {
        $users = User::query();

        if ($request->has("name")) {
            $name = $request->get("name");
            $users = $users->where("name", "LIKE", "%$name%");
        }

        return response()->json($users->get());
    }
}