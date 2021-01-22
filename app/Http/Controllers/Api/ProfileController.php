<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;

use App\User;

class ProfileController extends Controller
{
    //
    public function update(Request $request)
    {

        $this->validate($request, [
            'name' => 'min:2',
            'lastname' => 'min:2',
            'surname' => 'min:2',
            'phone' => 'min:2',
        ]);

        $request->user()->update([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'surname' => $request->surname,
            'phone' => $request->phone,
        ]);

        return (new UserResource($request->user()));
    }
    //
    public function password(Request $request)
    {

        if (!Hash::check($request->old_password, $request->user()->password)) {
            return response()->json([
                'errors' => [
                    'oldPassword' => [__('Password incorrect.')]
                ]
            ], 422);
        }

        $this->validate($request, [
            'password' => 'required|string|min:8|confirmed',
        ]);

        $request->user()->update([
            'name' => $request->name
        ]);

        return (new UserResource($request->user()));
    }
}
