<?php

namespace App\Http\Controllers;

use App\Manager;
use Illuminate\Http\Request;

class ManagersController extends Controller
{
    public function show() {
        
    }

    public function create() {
        return (view('app'));
    }

    public function store(Request $request) {
        $manager = new Manager();

        $manager->name = $request->name;
        $manager->email = $request->email;
        $manager->user_id = 1;

        $manager->save();

        return (view('app'));
    }
}
