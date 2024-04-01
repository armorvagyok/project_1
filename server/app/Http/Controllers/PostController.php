<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\post;
use App\Http\Requests\StorePosts;

class PostController extends Controller
{
    public function get() {
        $posts = post::with("user")->get();
        return response()->json($posts);
    }

    public function create(Request $request) {
        $created = post::create($request->all());
        return response()->json($created);
    }

    public function update(post $post, Request $request) {
        $post->update($request->all());
        return response()->json($post);
    }

    public function delete(post $post) {
        $post->delete();
        return response()->json("DELETED", 204);
    }

    public function search(Request $request) {
        $posts = post::query();

        if ($request->has("title")) {
            $title = $request->get("title");
            $posts = $posts->where("title", "LIKE", "%$title%");
        }

        return response()->json($posts->get());
    }
}