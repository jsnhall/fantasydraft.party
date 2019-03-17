<?php

namespace App\Http\Controllers;

use App\Manager;
use Illuminate\Http\Request;

class ManagersController extends Controller
{
    public function show() {
        $managers = Manager::where('user_id', 1)->get(['name', 'email']);

        return($managers);
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

        return ($manager);
    }
}
