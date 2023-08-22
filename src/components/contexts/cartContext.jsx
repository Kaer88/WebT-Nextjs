"use client"

import { createContext, useState } from "react";

export const cartContext = createContext([])

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            {children}
        </cartContext.Provider>
    )


}