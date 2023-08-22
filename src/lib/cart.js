import { prisma } from "@/db";

export async function addToCart({ productId, amount }) {
    const dbRes = await prisma.cart.upsert({
        where: {
            productId: productId
        },
        update: {
            amount: { increment: Number(amount) }
        },
        create: {
            productId: productId,
            amount: Number(amount)
        }
    })
    // const dbRes = await prisma.cart.create({ data: { productId: productId } });
    return dbRes;
}

export async function getCart() {

    const dbCart = await prisma.cart.findMany({
        include: {
            product: true,
        }
    })
    const properCart = dbCart.map(item => ({
        id: item.id,
        productId: item.productId,
        name: item.product.name,
        amount: item.amount,
        price: item.amount * item.product.price
    })
    )
    return properCart;
}