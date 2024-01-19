import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className="header">
            <div className='header-nav'>
            <img src={logo} alt="" />
            <div className='nav-menu'>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/login'>Login</Link>
            </div>
            </div>
        </nav>
    );
};

export default Header;