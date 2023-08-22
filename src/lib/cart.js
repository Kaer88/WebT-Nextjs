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

export async function removeCartItem(id, amount) {
    const currentCartItem = await prisma.cart.findFirst({
        where: {
            id: Number(id)
        }
    })

    if (Number(currentCartItem.amount) - Number(amount) > 0) {
        const dbRes = await prisma.cart.update({
            where: {
                id: Number(id)
            },
            data: {
                amount: currentCartItem.amount - amount
            }
        })
        return dbRes;

    } else {
        const dbRes = await prisma.cart.delete({ where: { id: Number(id) } })
        return dbRes;
    }
}