export default function CartSummary({ total }) {
    return (
        <div className="border-t-2 pt-4 px-6 flex justify-between">
            <span>Total Price:</span>
            <span className="font-bold text-xl">{total} Ft</span>
        </div>
    )
}