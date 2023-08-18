export default function Product({ productData }) {
    return (
        <div className="flex gap-5 mb-3 items-center">
            <span>{productData.name}</span>
            <span>{productData.price} Ft</span>
            <button className="outline outline-slate-700 p-1">Add to cart</button>
        </div>
    )
}