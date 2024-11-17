<?php

namespace App\Http\Controllers\External;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver("google")->stateless()->redirect();
    }

    public function callback()
    {
        dd(Socialite::driver("google")->stateless()->user()->token);

    }
}
