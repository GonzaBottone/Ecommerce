import { Link, NavLink } from "react-router-dom/dist";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to= '/'>
               <h3>Ecommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/caterogy/mauses`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Mauses</NavLink>
                <NavLink to={`/caterogy/teclados`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Teclados</NavLink>
                <NavLink to={`/caterogy/auriculares`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Auriculares</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar;