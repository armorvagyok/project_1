<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\like;

class LikeController extends Controller
{
    public function get() {
        $like = like::with("user")->with("post")->get();
        return response()->json($like);
    }

    public function create(Request $request) {
        $created = like::create($request->all());
        return response()->json($created);
    }

    public function update(like $like, Request $request) {
        $like->update($request->all());
        return response()->json($like);
    }

    public function delete(like $like) {
        $like->delete();
        return response()->json("DELETED", 204);
    }
}