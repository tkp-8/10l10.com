<?php

namespace App\Http\Controllers\External;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class IgController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Http::get('https://graph.instagram.com');
        dd($response->json());
    }
}
