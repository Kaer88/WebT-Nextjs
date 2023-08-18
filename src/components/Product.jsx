export default function Product({ productData }) {
    return (
        <div className="flex gap-3">
            <span>{productData.name}</span>
            <span>{productData.price} Ft</span>
            <button className="outline-double w-5">+</button>
        </div>
    )
}