<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManagersController extends Controller
{
    public function getManagers() {
        return (view('app'));
    }
}
