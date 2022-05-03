import React from 'react';

const Login = () => {
    return (
        <div>
            <form action="" className='mb-20'>
                <label className='w-80 block mx-auto mt-5' htmlFor="email">Email</label>
                <input className='w-80 block mt-1 mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="email" name="email" placeholder='Your Email' id="" />
                <label className='w-80 block mx-auto mt-5' htmlFor="password">Password</label>
                <input className='w-80 block mt-1 mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="password" name="password" placeholder='Enter a password' id="" />
                <input className='w-80 block mt-5 mx-auto bg-cyan-900 text-gray-50 py-3 rounded-md' type="submit" value='Login' />
                <p className='w-80 block mt-4  mx-auto text-red-800'>Forgot Password?</p>
                <div className='w-80 block mt-4  mx-auto'>
                    <button className="loginBtn loginBtn--facebook w-60">
                        Login with Facebook
                    </button>

                    <button className="loginBtn loginBtn--google w-60  ">
                        Login with Google
                    </button>
                </div>
            </form>
            
        </div>
    );
};

export default Login;