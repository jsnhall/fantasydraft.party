<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlayersController extends Controller
{
    public function getPlayersList() {
        $curl = curl_init();
        $apiKey = getenv('FANTASY_NERDS_API_KEY');

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://www.fantasyfootballnerd.com/service/draft-rankings/json/" . $apiKey,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Accept: */*",
                "Cache-Control: no-cache",
                "Connection: keep-alive",
                "Host: www.fantasyfootballnerd.com",
                "Postman-Token: ec2dba6a-4310-451c-ad6f-37bc657d8ea6,41883270-48ee-4b6a-a12c-087eb166b7c7",
                "User-Agent: PostmanRuntime/7.15.0",
                "accept-encoding: gzip, deflate",
                "cache-control: no-cache"
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
