import { addToCart } from "@/lib/cart";
import { NextResponse } from "next/server";

export function GET(_req) {

}

export async function POST(req){
    const body = req.json();
    const result = await addToCart(body);
    return NextResponse.json(result);
}