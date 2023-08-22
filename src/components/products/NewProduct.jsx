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
            if (newProductData.name === "" || newProductData.price < 0) {
                alert("Hibás új termék adat!")
                return
            }
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
            setInputState({
                name: "",
                price: 0,
            })
        }
    })

    const inputHandler = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
                <input type="text" onChange={inputHandler} value={inputState.name} placeholder="name" name="name" />
                <input type="number" onChange={inputHandler} value={inputState.price} name="price" />
            </div>
            <button
                onClick={() => addProduct(inputState)}
                className="outline outline-slate-700 p-1"
            >
                Add product
            </button>
        </div>
    )
}