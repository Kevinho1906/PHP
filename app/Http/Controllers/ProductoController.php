<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductoRequest;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller {

    public function __construct() {

        $this->middleware('cant', ['only' => ['store']]);
        
    }

    /**
     * Display a listing of the resource.
     */
    public function index() {

        return Producto::paginate(5);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductoRequest $request) {

        
        Producto::create($request->all());

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producto $producto) {

        Producto::findOrFail($request->id)->update($request->all());

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto) {

        Producto::findOrFail($producto->id)->delete();

    }
}
