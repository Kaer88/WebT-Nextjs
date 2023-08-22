export default function CartItem({ item }) {
    return (
        <div className="grid grid-cols-4 gap-4 items-center mb-4">
            <span>{item.name}</span>
            <span>{item.amount} db</span>
            <span>{item.price} Ft</span>
            <button className="outline outline-slate-700 p-1">Törlés</button>
        </div>
    )
}