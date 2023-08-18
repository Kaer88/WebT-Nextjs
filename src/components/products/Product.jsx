export default function Product({ productData }) {
    return (
        <div className="grid grid-cols-4 mb-3 gap-4">
            <span>{productData.name}</span>
            <span>{productData.price} Ft</span>
            <button className="outline outline-slate-700 p-1">Add to cart</button>
            <button className="outline outline-red-600 p-1">Delete</button>

        </div>
    )
}