<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tag;

class TagController extends Controller
{
    public function get() {
        $tag = tag::with("post")->get();
        return response()->json($tag);
    }

    public function create(Request $request) {
        $created = tag::create($request->all());
        return response()->json($created, 201);
    }

    public function update(tag $tag, Request $request) {
        $tag->update($request->all());
        return response()->json($tag);
    }

    public function delete(tag $tag) {
        $tag->delete();
        return response()->json("DELETED", 204);
    }
}