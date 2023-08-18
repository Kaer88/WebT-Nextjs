export default function Product({ productData }) {
    return (
        <div >
            <span>{productData.name}</span>
            <span>{productData.price}</span>
            <button>+</button>
        </div>
    )
}