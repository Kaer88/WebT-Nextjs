import { prisma } from "@/db";
import Product from "./Product";

export default async function ListProducts({ products }) {

    return (
        <div>
            {products?.map(product => <Product productData={product} />)}
        </div>
    )
}