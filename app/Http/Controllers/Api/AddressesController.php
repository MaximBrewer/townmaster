<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AddressesController extends Controller
{
    public function search(Request $request)
    {
        $token = app()['config']->get('dadata.api');
        $secret = app()['config']->get('dadata.secret');
        $dadata = new \Dadata\DadataClient($token, $secret);
        $response = $dadata->suggest("address", $request->q, 10);

        return ['addresses' => array_map(function ($value) {
            return $this->mutate($value);
        }, $response)];
    }
    public function mutate($dadata)
    {
        return [
            'value' => $dadata['value'] ? $dadata['value'] : "",
            'okato' => $dadata['data']['okato'] ? $dadata['data']['okato'] : "",
            'oktmo' => $dadata['data']['oktmo'] ? $dadata['data']['oktmo'] : "",
            'postal_code' => $dadata['data']['postal_code'] ? $dadata['data']['postal_code'] : "",
        ];
    }
}
