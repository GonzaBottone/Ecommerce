import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity ===0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p} /> )}
            <buttom onClick={() => clearCart()} className="Button" >Limpiar Carrito</buttom>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart