<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password'
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'is_admin'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function post() {
        return $this->hasMany(post::class, "user_id", "id");
    }

    public function comment() {
        return $this->hasMany(comment::class, "user_id", "id");
    }

    public function follow1() {
        return $this->hasMany(follow::class, "user_id_1", "id");
    }

    public function follow2() {
        return $this->hasMany(follow::class, "user_id_2", "id");
    }

    public function message1() {
        return $this->hasMany(messages::class, "user_id_1", "id");
    }

    public function message2() {
        return $this->hasMany(messages::class, "user_id_2", "id");
    }
}