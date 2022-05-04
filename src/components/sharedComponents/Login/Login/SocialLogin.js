import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const from = location?.state?.from?.pathname || '/';
    if (guser) {
        navigate(from,{replace:true})
    }
    return (
        <div className='w-80 block mt-4  mx-auto'>
            <button  className="loginBtn loginBtn--facebook w-60">
                Login with Facebook
            </button>

            <button onClick={() => signInWithGoogle()} className="loginBtn loginBtn--google w-60  ">
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;