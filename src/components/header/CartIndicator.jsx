export default function CartIndicator({ amount, text }) {

    return (
        <span
            className="border-2 rounded-xl text-xxs text-white bg-slate-800 justify-center flex w-14"
        >
            {amount} {text}
        </span>
    )
}