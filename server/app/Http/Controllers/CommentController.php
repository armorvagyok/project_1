<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\comment;
use App\Http\Requests\StoreComments;

class CommentController extends Controller
{
    public function get() {
        $comment = comment::with("post")->with("user")->get();
        return response()->json($comment);
    }

    public function create(Request $request) {
        $created = \App\Models\comment::create($request->all());
        return response()->json($created, 201);
    }

    public function update(comment $post, Request $request) {
        $comment->update($request->all());
        return response()->json($comment);
    }

    public function delete(comment $comment) {
        $comment->delete();
        return response()->json("DELETED", 204);
    }

    public function search(Request $request) {
        $comments = Comment::query();

        if ($request->has("text")) {
            $text = $request->get("text");
            $comments = $comments->where("text", "LIKE", "%$text%");
        }

        return response()->json($comments->get());
    }
}