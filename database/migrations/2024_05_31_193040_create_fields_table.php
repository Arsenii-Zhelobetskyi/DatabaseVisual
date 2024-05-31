`php
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
        Schema::create('fields', function (Blueprint $table) {
            $table->id();
            $table->string('label', 100);
            $table->enum('data_type', ['enum', 'int', 'varchar', 'boolean', 'double', 'date']);
            $table->boolean('primary_key')->default(false);
            $table->integer('max_value')->nullable();
            $table->boolean('not_null')->default(false);
            $table->boolean('unique')->default(false);
            $table->boolean('auto_increment')->default(false);
            $table->boolean('foreign_key')->default(false);
            $table->string('ref_table', 100)->nullable();
            $table->string('ref_field', 100)->nullable();
            $table->enum('rel_type', ['one-to-one', 'one-to-many', 'many-to-many'])->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fields');
    }
};
