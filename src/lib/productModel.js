import { prisma } from "@/db"

export const getProducts = async () => {
    const dbResponse = await prisma.products.findMany()
    return dbResponse;
}

export const createProduct = async ({ name, price }) => {
    const dbRes = await prisma.products.create({ data: { name: name, price: price } })
    return dbRes;
}