<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Order_Products;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //  $Orders = Order::all();
        $Orders = Order::orderBy('id', 'desc')->paginate(2);
        return response()->json([
            "status"=>"ok",
            "message"=>"All Orders",
            "data"=>$Orders
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Order = Order::find($id);
        if(empty($Order)) return response()->json(["error"=>"not exist id"]);
        $orderProducts = Order_Products::where(['order_id' => $id] )->get();
        $Order['products'] =$orderProducts ;
 
        return response()->json([
            "status"=>"ok",
            "message"=>"Product get successfully",
            "data"=>$Order
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
