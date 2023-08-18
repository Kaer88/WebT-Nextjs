import { getProducts } from "@/lib/dbHandler";
import { NextResponse } from "next/server";

export async function GET(_res) {
    const products = await getProducts();
    return NextResponse.json({ products });
}