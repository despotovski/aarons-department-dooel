<?php

namespace App\Domain\Employee\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShiftRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'date' => 'required',
            'hours' => 'required|integer',
            'rate_per_hour' => 'required|integer',
            'taxable' => 'required',
            'status' => 'required',
            'type' => 'required',
        ];
    }
}
