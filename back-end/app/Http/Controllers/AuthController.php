<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\AdminLoginRequest;
use App\Http\Requests\Auth\UserLoginRequest;
use App\Http\Requests\Auth\UserRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function UserRegister(UserRegisterRequest $request)
    {
        $user = $request->userRegister();

        return response()->json([
            'success' => true,
            'message' => 'User registered successfully',
            'data' => $user,
        ], 201);
    }

    public function UserLogin(UserLoginRequest $request)
    {
        $auth = $request->UserLogin();

        return response()->json([
            'success' => true,
            'message' => 'User logged in successfully',
            'data' => $auth,
        ], 200);
        
    }
    public function AdminLogin(AdminLoginRequest $request)
    {
        
    }


}
