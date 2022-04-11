import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const [showPass,setShowPass]=useState('');
    const navigate =useNavigate();

    const [createUserWithEmailAndPassword,user,loading ] = useCreateUserWithEmailAndPassword(auth);

    if(user){
        navigate('/')
    }
    if (loading) {
        return <p>Loading...</p>;
      }
    const handleEmailBlur=(event)=>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur =(event)=>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur =(event)=>{
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser =(event)=>{
        event.preventDefault();
        if(password!== confirmPassword){
            setError("**Passwords didn't match**");
            return;
        }
        if(password.length<6){
            setError("Password must be 6 characters or longer");
            return;
        }

        createUserWithEmailAndPassword(email,password)
    }

    // const handleShowPass = event =>{
    //     setShowPass(!showPass)
    // }
    return (
        <div>
             <div className='form-container'>
            <div>
            <h2 className='form-title'>SignUp</h2>
           <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur}  type={showPass?'text':"password"} name='' required /><br />
                {/* <button onClick={handleShowPass}>Show Password</button> */}
                
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input onBlur={handleConfirmPasswordBlur} type="password" name='' required/><br />
                {/* <button onClick={handleShowPass}>Show Password</button> */}
            </div>
            <p style={{color:'red'}}>{error}</p>
            <input type="submit" value="SignUp" className='form-submit' />
           </form>
           <p>
               Already Have an account? <Link className='form-link' to="/login">Login</Link>
           </p>
          <hr />
          <div className='google'>
         
          <button  className='button'>Continue with Google</button>
          </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;