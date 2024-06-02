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
        Schema::table('worksheets', function (Blueprint $table) {
            // Видаляємо старий foreign key
            $table->dropForeign(['table_id']);
            // Видаляємо колонку table_id
            $table->dropColumn('table_id');
            // Додаємо нову колонку типу json
            $table->json('table_data')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('worksheets', function (Blueprint $table) {
            // Видаляємо колонку table_data
            $table->dropColumn('table_data');
            // Відновлюємо колонку table_id
            $table->foreignId('table_id')->constrained('tables')->onDelete('cascade');
        });
    }
};
