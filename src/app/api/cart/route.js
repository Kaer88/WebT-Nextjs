import { addToCart, getCart } from "@/lib/cart";
import { NextResponse } from "next/server";

export async function GET(_req) {
    const cart = await getCart()
    return NextResponse.json(cart);
}

export async function POST(req){
    const body = await req.json();
    const result = await addToCart(body);
    return NextResponse.json(result);
}