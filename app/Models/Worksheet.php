<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Worksheet extends Model
{
   use HasFactory;

   public $timestamps = false;

   protected $fillable = [
     'worksheet_name',
     'user_id',
     'table_data'
   ];


   public function user()
     {
       return $this->belongsTo(User::class);
     }
}
