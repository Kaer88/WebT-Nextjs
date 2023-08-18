"use client"
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";

export default function ListProducts() {
    const { data } = useQuery(["products"], async () => {
        return fetch("/api/products").then(res => res.json().then(data => {
            console.log(data)
            return data
        }))
    })
    return (
            <div>
                {data?.map(product => <Product productData={product} />)}
            </div>

    )
}