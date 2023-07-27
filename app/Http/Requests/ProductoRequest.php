<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|max:20|unique:productos',
            'cantidad' => 'required|numeric|min:1|max:1000',
        ];
    }

    public function messages() {

        return [

            'required' => "El Campo :attribute Es Obligatorio",
            'max' => "El Campo :attribute Es Mayor a :max",
            'min' => "El Campo :attribute Es Menor a :min",
            'numeric' => "El Campo :attribute Debe Ser De Tipo Numerico",
            'unique' => "El Campo :attribute Ya Esta Repetido, Ingrese Otro Nombre",

        ];

    }

}
