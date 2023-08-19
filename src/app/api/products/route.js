import { createProduct, deleteProduct, getProducts } from "@/lib/product";
import { NextResponse } from "next/server";

export async function GET(_req) {
    const products = await getProducts();
    return NextResponse.json([ ...products ]);
}

export async function POST(req) {
    const body = await req.json()
    const newProduct = await createProduct(body)
    return NextResponse.json(newProduct)
}

export async function DELETE(req) {
    const body = await req.json();
    const deleteResponse = await deleteProduct(body)
    return NextResponse.json(deleteResponse)
}