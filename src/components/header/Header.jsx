import CartIcon from "./CartIcon";

export default function Header() {
    return (
        <header className="h-20 border-b-2 flex justify-between items-center px-10 bg-slate-800">
            <h1 className="font-bold text-zinc-400">Webtölcsér Task</h1>
            <CartIcon />
        </header>
    )


}