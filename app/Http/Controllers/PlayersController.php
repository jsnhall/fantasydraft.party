<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlayersController extends Controller
{
    public function getPlayersList() {
        $curl = curl_init();
        $apiKey = $_ENV['FANTASY_NERDS_API_KEY'];

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://www.fantasyfootballnerd.com/service/draft-rankings/json/" . $apiKey,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "postman-token: 7b7c7884-a667-6dfc-23a8-7c3037be56dd"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            echo $response;
        }
    }

    public function getPlayers() {
        return view('app');
    }
}
