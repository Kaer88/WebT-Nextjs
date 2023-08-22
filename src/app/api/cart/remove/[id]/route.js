import { removeCartItem } from "@/lib/cart";
import { NextResponse } from "next/server";


export async function DELETE(req, params) {
    try {
        const { amount } = await req.json();
        console.log(amount)
        const response = await removeCartItem(params.params.id, amount);
        return NextResponse.json(response);
    } catch(err) {
        console.log(err)
        return NextResponse.json({message: "fail"})
    }
    
}