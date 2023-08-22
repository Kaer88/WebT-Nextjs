"use client"
import { useQuery } from "@tanstack/react-query"
import CartItem from "./CartItem";
import { useContext, useEffect } from "react";
import { cartContext } from "../contexts/cartContext";
import CartSummary from "./CartSummary";

export default function Cart() {

    const { setCart } = useContext(cartContext)
    const { data } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await fetch("/api/cart");
            const data = await res.json();
            setCart(data);
            return data;
        }
    })
    return (
        <>
            {
                data?.length === 0 ?
                    <p>Üres a kosarad</p>
                    :
                    <div>
                        {data?.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
                        <CartSummary total={data.reduce((acc, curr) => acc += curr.price, 0)} />
                    </div>
            }
        </>
    )




}