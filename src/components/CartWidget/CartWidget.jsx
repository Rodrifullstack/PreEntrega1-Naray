import { useContext } from 'react'
import cart from './assets/cart-check.svg'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext)
    
    return(
        <Link to='/cart'>
            <img src={cart} alt="Cart widget"/>
            {totalQuantity()}
        </Link>
    )
}

export default CartWidget