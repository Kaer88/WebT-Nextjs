import { useState } from "react"

export default function Product({ productData }) {
    const [amount, setAmount] = useState()
    return (
        <div className="grid grid-cols-5 mb-3 gap-4">
            <span>{productData.name}</span>
            <span>{productData.price} Ft</span>
            <input type="number" name="amount" value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
            <button className="outline outline-slate-700 p-1">Add to cart</button>
            <button className="outline outline-red-600 p-1">Delete</button>
        </div>
    )
}