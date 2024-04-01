<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\messages;

class MessageController extends Controller
{
    public function get() {
        $message = messages::with("user1")->with("user2")->get();
        return response()->json($message);
    }

    public function create(Request $request) {
        $created = messages::create($request->all());
        return response()->json($created);
    }

    public function update(messages $message, Request $request) {
        $message->update($request->all());
        return response()->json($message);
    }

    public function delete(messages $message) {
        $message->delete();
        return response()->json("DELETED", 204);
    }
}