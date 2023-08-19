"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export default function NewProduct() {

    const queryClient = useQueryClient()

    const [inputState, setInputState] = useState(
        {
            name: "",
            price: 0,
        }
    );

    const { mutate: addProduct } = useMutation({
        mutationKey: ["addProduct"],
        mutationFn: async (newProductData) => {

            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newProductData),
            })
            return await res.json();
        },
        onSuccess: async () => {
            queryClient.invalidateQueries('product');
        }
    })

    const inputHandler = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <input type="text" onChange={inputHandler} value={inputState.name} placeholder="name" name="name" />
            <input type="number" onChange={inputHandler} value={inputState.price} placeholder="price" name="price" />
            <button onClick={() => addProduct(inputState)}>Add product</button>
        </>
    )
}