import { createProduct, getProducts } from "@/lib/productModel";
import { NextResponse } from "next/server";

export async function GET(_req) {
    const products = await getProducts();
    return NextResponse.json([ ...products ]);
}

export async function POST(req) {
    const body = await req.json()
    const newProduct = await createProduct(body)
    console.log("új termék", newProduct)
    return NextResponse.json(newProduct)
}