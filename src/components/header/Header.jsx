import CartIcon from "./CartIcon";

export default function Header() {
    return (
        <header className="h-20 border-b-2 flex justify-between items-center px-10">
            <h1>Webtölcsér Task</h1>
            <CartIcon />
        </header>
    )


}