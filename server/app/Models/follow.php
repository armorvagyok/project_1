<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class follow extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id_1',
        'user_id_2',
        'notify'
    ];

    public function user1() {
        return $this->belongsTo(user::class, "user_id_1", "id");
    }

    public function user2() {
        return $this->belongsTo(user::class, "user_id_2", "id");
    }
}