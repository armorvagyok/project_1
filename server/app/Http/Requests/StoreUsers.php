<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class StoreUsers extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|min:3',
            'email' => 'required',
            'password' => 'required|min:8'
        ];
    }

    public function response(array $errors) {
        return response()->json(["error" => $errors], 400);
    }

    protected function failedValidation(Validator $validator) {
        throw new HttpResponseException(response()->json([
            'errors' => $validator->errors()
        ], 422));
    }

    public function messages():array {
        return [
            'name.required' => "you need a username",
            'email.required' => "you need an email",
            'password.required' => "you need a password",
            'name.min' => "minimum length is 3",
            'password.min' => "minimum length is 8"
        ];
    }
}