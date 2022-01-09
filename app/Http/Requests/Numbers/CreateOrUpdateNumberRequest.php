<?php

namespace App\Http\Requests\Numbers;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrUpdateNumberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'number' => 'required|between:8,14',
        ];
    }
}
