import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import './Login.css'

const Login = () => {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate =useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

     

    const handleEmailBlur=(event)=>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event)=>{
        setPassword(event.target.value);
    }

    const handleUserSignIn =(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)
    }

     if(user){
          navigate('/')
    }
    if(loading){
       return <p>Successfully Logged in</p>
    }
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>Login</h2>
           <form action="" onSubmit={handleUserSignIn}>
            <div className="input-group">
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email' required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name=''required />
            </div>
            <p style={{color:'red'}}>{error?.message}</p>
            <input type="submit" value="Login" className='form-submit' />
           </form>
           <p>
               New to Ema-john? <Link className='form-link' to="/signup">Create an account</Link>
           </p>
          <hr />
          <div className='google'>
         
          <button  className='button'>Continue with Google</button>
          </div>
            </div>
        </div>
    );
};

export default Login;