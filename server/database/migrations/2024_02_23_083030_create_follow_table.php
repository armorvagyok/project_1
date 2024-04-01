<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('follows', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id_1');
            $table->foreignId('user_id_2');
            $table->tinyInteger('notify');
            $table->timestamps();

            $table->foreign('user_id_1')
                ->references('id')
                ->on('users');
            $table->foreign('user_id_2')
                ->references('id')
                ->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('follow');
    }
};
