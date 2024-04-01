<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\follow;

class FollowController extends Controller
{
    public function get() {
        $follow = follow::with("user1")->with("user2")->get();
        return response()->json($follow);
    }

    public function create(Request $request) {
        $created = follow::create($request->all());
        return response()->json($created);
    }

    public function update(follow $follow, Request $request) {
        $follow->update($request->all());
        return response()->json($follow);
    }

    public function delete(follow $follow) {
        $follow->delete();
        return response()->json("DELETED", 204);
    }
}