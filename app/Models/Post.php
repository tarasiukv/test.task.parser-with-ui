<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'link',
        'description',
        'category',
        'creator',
    ];

    public function scopeSearch($query, $search_text)
    {
        return $query->where(function ($query) use ($search_text) {
            $query->whereRaw("LOWER(title) like '%" . mb_strtolower($search_text) . "%'")
                ->orWhereRaw("LOWER(description) like '%" . mb_strtolower($search_text) . "%'")
                ->orWhereRaw("LOWER(category) like '%" . mb_strtolower($search_text) . "%'");
        });
    }
}
