import { prisma } from "@/db"

export const getProducts = async () => {
    const dbResponse = await prisma.products.findMany()
    return dbResponse
}