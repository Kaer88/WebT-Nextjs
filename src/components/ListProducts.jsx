import Product from "./Product";

export default function ListProducts({ products }) {
    return (
        <div>
            {products?.map(product => <Product productData={product} />)}
        </div>
    )
}