<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Post;
use SimpleXMLElement;
use function Laravel\Prompts\text;


class ParsePosts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'parse:posts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $response = Http::get('https://lifehacker.com/rss');

        if($response->successful()) {
            $data = new SimpleXMLElement($response->body());


            foreach ($data->channel->item as $item) {
                $post = new Post();

                $post->title = $item->title ? (string)$item->title : null;
                $post->link = $item->link ? (string)$item->link : null;
                $post->description = $item->description ? strip_tags((string)$item->description) : null;
                $post->category = $item->category ? implode('; ', (array)$item->category) : null;
                $post->creator = isset($item->children('dc', true)->creator) ? (string)$item->children('dc', true)->creator : null;
                $post->save();
            }
        } else {
            $this->error('Error while parse. ', $response->status());
        }
    }
}
