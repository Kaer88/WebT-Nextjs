"use client"

import { useContext, useEffect, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { cartContext } from './contexts/cartContext'
export default function CartIcon() {
    const { cart } = useContext(cartContext);
    const [indicators, setIndicators] = useState({})

    useEffect(() => {
        if (cart.length === 0) return 
        setIndicators({
            sum: cart?.reduce((acc, curr) => acc += curr.price, 0),
            totalAmount: cart?.reduce((acc, curr) => acc += curr.amount, 0)
        })
    }, [cart])

    return (
        <div className="relative h-16">
            <MdShoppingCart className='relative' size={30} />
            <div className='flex flex-col'>
                <span>{indicators?.totalAmount} db</span> 
                <span>{indicators?.sum} Ft</span>
            </div>
        </div>
    )
}