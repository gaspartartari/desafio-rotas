import './styles.css';
import { NavLink } from "react-router-dom";


export default function CategoryNav() {

    return (

        <div className='dr-container'>
            <nav className='dr-nav-product-categories'>
                <div >
                    <NavLink
                        className={({ isActive }) => isActive ? 'nav-bold' : 'nav-light'}
                        to='/products/computers'>Computadores
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'nav-bold' : 'nav-light'}
                        to='/products/electronics'>Eletrônicos
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'nav-bold' : 'nav-light'}
                        to='/products/books'>Livros
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}