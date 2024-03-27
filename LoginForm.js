
import React from 'react'
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/Icons/fontawesome/css/all.css'
import logo from '../LoginForm/logo.png';
import img from '../LoginForm/img.png';

const LoginForm = () => {
    return (
        < div className='image'>

            <img src={img} alt='Login img' />
            <div className='header'>
                <div className='logo '>
                    <img src={logo} alt='Login img' />

                    <h1 >UI Unicorn</h1>
                </div>

                < div className='header2'>
                    <p>
                        <h2>Nice to see you again</h2>
                    </p>
                </div>
                <div className="input-box">
                     <label className='lebel' htmlFor=" text">Login</label>
                    <input type="text" placeholder='Email or phone number ' className='form-control rounded-0' required />
                </div>

                <div className="input-box">
                     <label className="password" htmlFor="password">  Password</label>
                       <input type="password" placeholder='Enter Password ' className='form-control rounded-0 ' required />
                </div>
                    <a  className="forgetPassword"href="/">Forgot password?</a>
        
                <button className='sign'> Sign in</button>
                    <p>Dont have an account? <a className="register-link" href="/">  Sign up now</a>
                    </p>
              
            </div>
        </div >


    );
};
export default LoginForm

