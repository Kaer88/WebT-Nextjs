import { CartContextProvider } from "./cartContext";

export default function Providers({ children }) {

    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    )

}