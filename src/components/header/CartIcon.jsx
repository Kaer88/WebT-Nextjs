"use client"

import { useContext, useEffect, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { cartContext } from '../contexts/cartContext'
import CartIndicator from './CartIndicator';

export default function CartIcon() {
    const { cart } = useContext(cartContext);
    const [indicators, setIndicators] = useState({})

    useEffect(() => {
        setIndicators({
            sum: cart?.length > 0 ? cart.reduce((acc, curr) => acc += curr.price, 0) : 0,
            totalAmount: cart?.length > 0 ? cart?.reduce((acc, curr) => acc += curr.amount, 0) : 0
        })
    }, [cart])

    return (
        <div className="relative h-16 flex items-center gap-1">
            <div className='flex flex-col gap-1'>
                <CartIndicator amount={indicators?.totalAmount} text="db" />
                <CartIndicator amount={indicators?.sum} text="Ft" />
            </div>
            <MdShoppingCart className='relative' size={30} color='#6f7378'/>

        </div>
    )
}