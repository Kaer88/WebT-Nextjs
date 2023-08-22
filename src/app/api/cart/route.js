import { getCart } from "@/lib/cart";
import { NextResponse } from "next/server";


export async function GET(_req) {
    const cart = await getCart()
    return NextResponse.json(cart);
}