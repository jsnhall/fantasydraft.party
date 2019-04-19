<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Auth;
class UsersController extends Controller
{
    public function create() {
        return view('app');
    }

    public function login() {
        //Get the logged in user.
        //dd(auth()->user());
        return view('app');
    }

    public function register(Request $request)
    {
        $user = new User();
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->password = Hash::make($request['password']);
        $user->save();

        auth()->login($user);

        return 'success';
    }
    public function loginUser(Request $request)
    {
        $loggedIn = 'fail';
        $credentials = $request->only('email', 'password');
        if(Auth::attempt($credentials))
        {
            $loggedIn = 'success';
        }

        return $loggedIn;
    }
    public function test_manager_get()
    {
        //For testing I am just grabbing the user with an ID of 1.
        //You should be able to do this to get the logged in user;
        //$user = auth()->user();
        $user = User::Find(1);
        dd($user->managers);
    }
}
