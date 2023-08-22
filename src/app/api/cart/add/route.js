import { addToCart } from "@/lib/cart";
import { NextResponse } from "next/server";

export async function POST(req){
    const body = await req.json();
    const result = await addToCart(body);
    return NextResponse.json(result);
}