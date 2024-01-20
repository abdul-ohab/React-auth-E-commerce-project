import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }

    return (
        <nav className="header">
            <div className='header-nav'>
                <img src={logo} alt="" />
                <div className='nav-menu'>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/orders'>Orders</Link>
                    <Link to='/inventory'>Inventory</Link>
                    <Link to='/about'>About</Link>
                {
                    user?.uid? <span className='text-white p-3'><button onClick={handleLogout}> Log out</button></span>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                    </>
                }
                </div>
            </div>
        </nav>
    );
};

export default Header;