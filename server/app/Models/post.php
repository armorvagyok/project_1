<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'text',
        'url',
        'user_id'
    ];

    public function user() {
        return $this->belongsTo(User::class, "user_id", "id");
    }

    public function like() {
        return $this->belongsTo(User::class, "user_id", "id");
    }

    public function tag() {
        return $this->belongsTo(User::class, "post_id", "id");
    }
}