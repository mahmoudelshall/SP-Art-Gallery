<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\CreateProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $products = Product::all();
        return response()->json([
            "status"=>"ok",
            "message"=>"All Products",
            "data"=>$products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateProductRequest $request)
    {
        $product = $request->createProduct();
        return response()->json([
            "status"=>"ok",
            "message"=>"Product created successfully",
            "data"=>$product
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        if(empty($product)) return response()->json(["error"=>"not exist id"]);
        return response()->json([
            "status"=>"ok",
            "message"=>"Product get successfully",
            "data"=>$product
        ]);
    } 

    //searchName
    public function searchName($name)
    {
        $products = Product::where('name','like',"%$name%")->get(); 
        return response()->json([
            "status"=>"ok",
            "message"=>"Product get successfully",
            "data"=>$products
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, $id)
    {
        //
        // $old = Product::find($id);
        // if(empty($old)) return response()->json(["error"=>"not exist id"]);
        $Product = $request->updateProduct($id);
        return response()->json([
            "status"=>"ok",
            "message"=>"Product Updated successfully",
            "data"=>$Product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // $image = Storage::disk('public')->get($imagePath);
        $Product = Product::findOrFail($id);
        Storage::disk('public')->delete('images/'.$Product['image']);
        $Product->delete();

        return response()->json([
            'message' => 'Product deleted successfully',
        ]);
    }
}
