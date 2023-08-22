export default function CartIndicator({ amount, text }) {

    return (
        <span
            className="border-1 rounded-xl text-xxs text-white bg-rose-800 justify-center flex w-14"
        >
            {amount} {text}
        </span>
    )
}