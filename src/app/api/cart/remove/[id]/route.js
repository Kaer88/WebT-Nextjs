import { removeCartItem } from "@/lib/cart";
import { NextResponse } from "next/server";


export async function DELETE(req, params) {
    const { amount } = await req.json();
    try {
        const response = await removeCartItem(params.params.id, amount);
        return NextResponse.json(response);

    } catch {
        return NextResponse.json({message: "invalid operation"}).status("500")
    }
}