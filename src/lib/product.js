import { prisma } from "@/db"

export const getProducts = async () => {
    const dbResponse = await prisma.products.findMany()
    return dbResponse;
}

export const createProduct = async ({ name, price }) => {
    const dbRes = await prisma.products.create({ data: { name: name, price: Number(price) } })
    return dbRes;
}

export const deleteProduct = async (id) => {
    const dbRes = await prisma.products.delete({ where: { id: id } });
    return dbRes;
}