"use client"
import { useQuery } from "@tanstack/react-query"

export default function Cart() {
    const { data, isLoading } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await fetch("/api/cart");
            return await res.json();
        }
    })
    return (
        <div>
            {data?.map(cartItem => (
                <div key={cartItem.id}>
                    <span>{cartItem.name}</span>
                    <span>{cartItem.amount}</span>
                    <span>{cartItem.price}</span>
                </div>
            ))
            }
        </div>
    )

}