"use client"
import { useQuery } from "@tanstack/react-query"
import CartItem from "./CartItem";

export default function Cart() {
    const { data, isLoading } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await fetch("/api/cart");
            return await res.json();
        }
    })
    console.log(data)
    return (
        <div>
            {data?.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
        </div>
    )

}