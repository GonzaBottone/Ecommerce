import CartWidget  from './CartWidget/CartWidget';

const NavBar = ()  => {
    return (
        <nav>
            <div className='navbar'>
                <button className='ecommerce'>Ecommerce</button>
                <button className='boton'>Celulares</button>
                <button className='boton'>Computadoras</button>
                <button className='boton'>Perifericos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar