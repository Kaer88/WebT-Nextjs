"use client"
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";

export default function ListProducts() {
    const { data, isLoading } = useQuery(["products"], async () => {
        const res = await fetch("/api/products")
        const data = await res.json()
        return data;
    })
    return (
        <div className="container border-slate-600 border-solid border-2 p-4">
            {
                isLoading ?
                    <p>betöltés....</p>
                    :
                    <>
                        {data?.length === 0 && "Nincs termék az adatbázisban"}
                        {data?.map(product => <Product key={product.id} productData={product} />)}
                    </>

            }


        </div>


    )
}