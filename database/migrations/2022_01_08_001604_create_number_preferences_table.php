<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNumberPreferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('number_preferences', static function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('number_id');
            $table->string('name');
            $table->boolean('value');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('number_id')
                ->references('id')
                ->on('numbers')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('number_preferences');
    }
}
