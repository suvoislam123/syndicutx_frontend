import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleLogin = async(e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }
    let from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from ,{replace:true})
    }
    if (error) {
        console.log(error);
    }
    return (
        <div>
            <form onSubmit={handleLogin} className='mb-20'>
                <label className='w-80 block mx-auto mt-5' htmlFor="email">Email</label>
                <input ref={emailRef} className='w-80 block mt-1 mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="email" name="email" placeholder='Your Email'  />
                <label className='w-80 block mx-auto mt-5' htmlFor="password">Password</label>
                <input ref={passwordRef} className='w-80 block mt-1 mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="password" name="password" placeholder='Enter a password'  />
                <input className='w-80 block mt-5 mx-auto bg-cyan-900 text-gray-50 py-3 rounded-md' type="submit" value='Login' />
                {/* Here Conditional Rendering for forgetting password */}
                <p className='hidden w-80 block mt-4  mx-auto text-red-800'>Forgot Password?</p>
                <Link to='/register'><p className='w-80 block mt-2  mx-auto text-blue-800'>Create A new Account</p></Link>
                <SocialLogin/>
            </form>
            
        </div>
    );
};

export default Login;