import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = () =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user
            form.reset();
            navigate(from, {replace: true});
            console.log(user);
        })
        .catch(error => console.error(error))
    }   

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type='password' name="password" id="" required />
                    <p><small>
                         <span>Hide Password</span>: <span>Show Password</span>
                        
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='smalls'><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;