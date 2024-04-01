<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class StoreFollows extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'user_id_1' => 'required',
            'user_id_2' => 'required',
            'notify' => 'required'
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
            'text.required' => "no text in post"
        ];
    }
}