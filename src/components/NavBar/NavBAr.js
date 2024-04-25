import { Link, NavLink } from "react-router-dom/dist";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to= '/'>
               <h3>Ecommerce</h3>
            </Link>
            <div>
                <NavLink to={`/caterogy/mauses`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Options' }>Mauses</NavLink>
                <NavLink to={`/caterogy/teclados`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Options' }>Teclados</NavLink>
                <NavLink to={`/caterogy/auriculares`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Options' }>Auriculares</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar;