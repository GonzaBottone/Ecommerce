import CartWidget  from './CartWidget/CartWidget';

const NavBar = ()  => {
    return (
        <nav>
            <div className='navbar'>
                <button className='boton'>Celulares</button>
                <button className='boton'>Computadoras</button>
                <button className='boton'>Perifericos</button>
                <h3>Ecommerce</h3>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar