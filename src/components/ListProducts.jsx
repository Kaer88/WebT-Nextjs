"use client"
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";

export default function ListProducts() {
    const { data, isLoading } = useQuery(["products"], async () => {
        const res = await fetch("/api/products")
        const data = res.json()
        return data
    })

    return (
        isLoading ?
            <p>betöltés....</p>
            : (
                <div>
                    {data?.map(product => <Product key={product.id} productData={product} />)}
                </div>
            )

    )
}