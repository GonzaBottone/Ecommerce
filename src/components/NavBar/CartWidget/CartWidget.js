import { useContext } from 'react'
import cart from './assets/carrito-de-compras.png'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)


    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='carrito' src={cart} alt='cart-widget'></img>
            { totalQuantity }
        </Link>
    )
}
export default CartWidget
