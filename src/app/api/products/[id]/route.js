import { deleteProduct } from "@/lib/product";
import { NextResponse } from "next/server";

export async function DELETE(req, params) {
    const { id } = params.params;
    const deleteResponse = await deleteProduct(id)
    return NextResponse.json(deleteResponse)
}