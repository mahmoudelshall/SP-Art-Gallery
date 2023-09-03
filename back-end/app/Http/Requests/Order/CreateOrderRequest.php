<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrderRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
         return [
           'customer_id' => 'required|integer|max:100|exists:customers,id',
            'customer_name' => 'required|string|max:100',
            'customer_email' => 'required|email',
            'customer_phone' => 'required|string|regex:/^[0-9]{10}$/',
            'customer_address' => 'required|string|max:255',
            'status' => 'required|in:new,cancelled,completed',
            //'price' => 'required|numeric',
            //products validation
            'products' => 'required|array',
            'products.*.id' => 'required|integer|max:100|exists:products,id',
            'products.*.product_quantity' =>'required|min:1',
            'products.*.product_price'=>'required|numeric',
            'products.*.product_subTotal'=>'required|numeric',
            'products.*.description'=>'string|max:255',
        ];
    }
}

//$table->timestamp('date');
//$table->float('total');
$table->unsignedBigInteger('product_id');  //foreign key
            $table->string('description');
            $table->float('product_price');
            $table->float('product_subTotal');
            $table->integer('product_quantity');