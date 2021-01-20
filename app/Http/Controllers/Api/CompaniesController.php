<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompaniesController extends Controller
{
    //
    public function search(Request $request)
    {
        $token = app()['config']->get('dadata.api');
        $secret = app()['config']->get('dadata.secret');
        $dadata = new \Dadata\DadataClient($token, $secret);
        $response = $dadata->suggest("party", $request->q, 10);
        return ['companies' => $response];
    }
}
