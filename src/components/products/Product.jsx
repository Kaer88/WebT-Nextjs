import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export default function Product({ productData }) {
    const queryClient = useQueryClient();
    const [amount, setAmount] = useState(1)
    const {mutate: addToCart} = useMutation({
        querykey: ["addtocart"],
        mutationFn: async (amount) => {
            console.log("queryben", amount)
            const response = await fetch("/api/cart", {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
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
    console.log(amount)
    return (
        <div className="grid grid-cols-5 mb-3 gap-4">
            <span>{productData.name}</span>
            <span>{productData.price} Ft</span>
            <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => { setAmount(e.target.value) }}
                className="w-10 text-center"
            />
            <button onClick={() => addToCart(amount)} className="outline outline-slate-700 p-1">Add to cart</button>
            <button className="outline outline-red-600 p-1">Delete</button>
        </div>
    )
}