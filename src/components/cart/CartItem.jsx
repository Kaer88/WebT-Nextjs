import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export default function CartItem({ item }) {
    const queryClient = useQueryClient()
    const { mutate, isLoading } = useMutation({
        queryKey: ["deleteCartItem"],
        mutationFn: async () => {
            const response = await fetch(`api/cart/remove/${item.id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ amount: inputState })
            })
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('cart')
        }
    })
    const [inputState, setInputState] = useState(1);
    return (
        <div className="grid grid-cols-5 gap-4 items-center mb-4">
            <span>{item.name}</span>
            <span>{item.amount} db</span>
            <span>{item.price} Ft</span>
            <button onClick={mutate} className="outline outline-slate-700 p-1">{isLoading? "..." : "Delete"}</button>
            <input className="w-10" type="number" onChange={(e) => setInputState(e.target.value)} value={inputState} />
        </div>
    )
}