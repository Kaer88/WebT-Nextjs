import { prisma } from "@/db";

export async function addToCart(productId) {
    const dbRes = await prisma.cart.create({ data: { productId: productId } });
    return dbRes;
}