import cart from './assets/cart-check.svg'

const CartWidget = () => {
    return(
        <>
            <img src={cart} alt="Cart widget"/>
            <p>0</p>
        </>
    )
}

export default CartWidget