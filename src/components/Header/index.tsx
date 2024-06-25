import { NavLink } from 'react-router-dom';
import './styles.css';
import imgIcon from '../../assets/home-svgrepo-com1.svg';
import { Link } from 'react-router-dom';


export default function Header() {

    return (
        <header className='dr-header'>

            <nav className='dr-container'>
                <div className='dr-header-nav-links'>
                    <NavLink
                        className={({ isActive }) => isActive ? 'nav-bold' : 'nav-light'}
                        to='/home'>Início
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'nav-bold' : 'nav-light'}
                        to='/products'>Produtos
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'nav-bold' : 'nav-light'}
                        to='/about-us'>Sbore nós
                    </NavLink>
                </div>
                <div className='dr-header-icon'>
                    <Link to='/home'><img src={imgIcon} alt="home" /></Link>
                </div>

            </nav>


        </header>
    );
}