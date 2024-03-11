import cart from './assets/carrito-de-compras.png'

const CartWidget = () => {
    return (
        <div>
            <img className='img-carrito' src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget