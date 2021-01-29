<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Company;
use Illuminate\Support\Facades\Auth;
use App\User;

class CompaniesController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'inn' => 'unique:companies,user_id,inn'
        // ]);

        $data = $request->all();
        $user = User::find(Auth::id());

        unset($data['licensies']);

        $data['user_id'] = $user->id;
        $company = Company::create($data);
        $user->company()->associate($company);
        $user->save();
        return ['company' => $company];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        // $request->validate([
        //     'inn' => 'unique:companies,user_id,inn'
        // ]);

        $company = Company::findOrFail($id);
        $data = $request->all();
        $user = User::find(Auth::id());

        unset($data['licensies']);

        $data['user_id'] = $user->id;
        $company->update($data);
        $user->company()->associate($company);
        $user->save();
        return ['company' => $company];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    //
    public function search(Request $request)
    {
        $token = app()['config']->get('dadata.api');
        $secret = app()['config']->get('dadata.secret');
        $dadata = new \Dadata\DadataClient($token, $secret);
        $response = $dadata->suggest("party", $request->q, 10);

        // return ['companies' => $response];
        return ['companies' => array_map(function ($value) {
            return $this->mutate($value);
        }, $response)];
    }

    public function mutate($dadata)
    {
        $type_id = 1;
        if ((int)$dadata['data']['opf']['code'] == 50102) $type_id = 3;
        if ((int)$dadata['data']['opf']['code'] == 50101) $type_id = 4;
        return [
            'type_id' => $type_id,
            'title' => $dadata['data']['name']['short_with_opf'],
            'fulltitle' =>  $dadata['data']['name']['full_with_opf'],
            'inn' => $dadata['data']['inn'],
            'kpp' => $dadata['data']['kpp'],
            'ogrn' => $dadata['data']['ogrn'],
            'okved' => $dadata['data']['okved'],
            'guiv' => "",
            'phone' => "",
            'fax' => "",
            'email' => "",
            'address' => $dadata['data']['address']['unrestricted_value'],
            'okato' => $dadata['data']['address']['data']['okato'],
            'oktmo' => $dadata['data']['address']['data']['oktmo'],
            'postal_code' => $dadata['data']['address']['data']['postal_code'],
            'industry' => 'other',
            'activity' => false,
            'waste' => false,
            'registration' => false,
            'licensies' => []
        ];
    }
}

// {
//     "value": "ОАО \"ОМСКХЛЕБОПРОДУКТ\"",
//     "unrestricted_value": "ОАО \"ОМСКХЛЕБОПРОДУКТ\"",
//     "data": {
//       "kpp": "550701001",
//       "capital": null,
//       "management": {
//         "name": "Карпов Василий Пантелимонович",
//         "post": "И.О. ГЕНЕРАЛЬНОГО ДИРЕКТОРА",
//         "disqualified": null
//       },
//       "founders": null,
//       "managers": null,
//       "predecessors": null,
//       "successors": null,
//       "branch_type": "MAIN",
//       "branch_count": 0,
//       "source": null,
//       "qc": null,
//       "hid": "4cf67f67fb71dacdb2d0d9a4e75d7f089250c882aa29c531cbfffeda9fb62fff",
//       "type": "LEGAL",
//       "state": {
//         "status": "ACTIVE",
//         "code": null,
//         "actuality_date": 1609459200000,
//         "registration_date": 724896000000,
//         "liquidation_date": null
//       },
//       "opf": {
//         "type": "2014",
//         "code": "12247",
//         "full": "Публичное акционерное общество",
//         "short": "ПАО"
//       },
//       "name": {
//         "full_with_opf": "ОТКРЫТОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО \"ОМСКХЛЕБОПРОДУКТ\"",
//         "short_with_opf": "ОАО \"ОМСКХЛЕБОПРОДУКТ\"",
//         "latin": null,
//         "full": "ОМСКХЛЕБОПРОДУКТ",
//         "short": "ОМСКХЛЕБОПРОДУКТ"
//       },
//       "inn": "5505010874",
//       "ogrn": "1025501166426",
//       "okpo": "00950670",
//       "okato": "52401364000",
//       "oktmo": "52701000001",
//       "okogu": "4210008",
//       "okfs": "16",
//       "okved": "52.10.3",
//       "okveds": null,
//       "authorities": null,
//       "documents": null,
//       "licenses": null,
//       "finance": {
//         "tax_system": null,
//         "income": null,
//         "expense": null,
//         "debt": null,
//         "penalty": null
//       },
//       "address": {
//         "value": "г Омск, ул Бетховена, д 1",
//         "unrestricted_value": "644082, Омская обл, г Омск, Кировский округ, ул Бетховена, д 1",
//         "data": {
//           "postal_code": "644082",
//           "country": "Россия",
//           "country_iso_code": "RU",
//           "federal_district": "Сибирский",
//           "region_fias_id": "05426864-466d-41a3-82c4-11e61cdc98ce",
//           "region_kladr_id": "5500000000000",
//           "region_iso_code": "RU-OMS",
//           "region_with_type": "Омская обл",
//           "region_type": "обл",
//           "region_type_full": "область",
//           "region": "Омская",
//           "area_fias_id": null,
//           "area_kladr_id": null,
//           "area_with_type": null,
//           "area_type": null,
//           "area_type_full": null,
//           "area": null,
//           "city_fias_id": "140e31da-27bf-4519-9ea0-6185d681d44e",
//           "city_kladr_id": "5500000100000",
//           "city_with_type": "г Омск",
//           "city_type": "г",
//           "city_type_full": "город",
//           "city": "Омск",
//           "city_area": null,
//           "city_district_fias_id": null,
//           "city_district_kladr_id": null,
//           "city_district_with_type": "Кировский округ",
//           "city_district_type": "округ",
//           "city_district_type_full": "округ",
//           "city_district": "Кировский",
//           "settlement_fias_id": null,
//           "settlement_kladr_id": null,
//           "settlement_with_type": null,
//           "settlement_type": null,
//           "settlement_type_full": null,
//           "settlement": null,
//           "street_fias_id": "1369709a-05ea-4a8e-b2a6-9d55aa084be9",
//           "street_kladr_id": "55000001000011700",
//           "street_with_type": "ул Бетховена",
//           "street_type": "ул",
//           "street_type_full": "улица",
//           "street": "Бетховена",
//           "house_fias_id": "631c0466-21a5-4548-8be3-ee66ab709f15",
//           "house_kladr_id": "5500000100001170015",
//           "house_type": "д",
//           "house_type_full": "дом",
//           "house": "1",
//           "block_type": null,
//           "block_type_full": null,
//           "block": null,
//           "flat_fias_id": null,
//           "flat_type": null,
//           "flat_type_full": null,
//           "flat": null,
//           "flat_area": null,
//           "square_meter_price": null,
//           "flat_price": null,
//           "postal_box": null,
//           "fias_id": "631c0466-21a5-4548-8be3-ee66ab709f15",
//           "fias_code": "55000001000000001170015",
//           "fias_level": "8",
//           "fias_actuality_state": "0",
//           "kladr_id": "5500000100001170015",
//           "geoname_id": "1496153",
//           "capital_marker": "2",
//           "okato": "52401364000",
//           "oktmo": "52701000001",
//           "tax_office": "5507",
//           "tax_office_legal": "5507",
//           "timezone": "UTC+6",
//           "geo_lat": "54.9296369",
//           "geo_lon": "73.3363751",
//           "beltway_hit": null,
//           "beltway_distance": null,
//           "metro": null,
//           "qc_geo": "0",
//           "qc_complete": null,
//           "qc_house": null,
//           "history_values": null,
//           "unparsed_parts": null,
//           "source": "644082, ОБЛАСТЬ ОМСКАЯ, ГОРОД ОМСК, УЛИЦА БЕТХОВЕНА, 1",
//           "qc": "0"
//         }
//       },
//       "phones": null,
//       "emails": null,
//       "ogrn_date": 1029715200000,
//       "okved_type": "2014",
//       "employee_count": null
//     }
//   }