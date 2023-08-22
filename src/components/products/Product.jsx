import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export default function Product({ productData }) {
    const queryClient = useQueryClient();
    const [amount, setAmount] = useState(1)
    const { mutate: addToCart } = useMutation({
        querykey: ["addtocart"],
        mutationFn: async (amount) => {
            const response = await fetch("/api/cart/add", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    productId: productData.id,
                    amount: amount
                })
            })
            return await response.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries('cart');
            setAmount(1);
        }

    })

    const {mutate: deleteProduct} = useMutation({
        queryKey: ["deleteProduct"],
        mutationFn: async () => {
            const response = await fetch(`/api/products/${productData.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            return await response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries('products')
        }

    })


    return (
        <div className="grid grid-cols-5 mb-3 gap-4">
            <span>{productData.name}</span>
            <span>{productData.price} Ft</span>
            <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => { if (e.target.value > 0) setAmount(e.target.value) }}
                className="w-10 text-center"
            />
            <button onClick={() => addToCart(amount)} className="outline outline-slate-700 p-1">Add to cart</button>
            <button onClick={deleteProduct} className="outline outline-red-600 p-1">Delete</button>
        </div>
    )
}