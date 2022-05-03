import React from 'react';

const Register = () => {
    return (
        <div>
            <form action="" className='mb-20'>
                <input className='w-80 block mt-5 mx-auto border-2 border-cyan-900 py-2 rounded px-6'  type="text" name="fname" placeholder='Your first name' id="" />
                <input className='w-80 block mt-5 mx-auto border-2 border-cyan-900 py-2 rounded px-6'  type="text" name="lname" placeholder='Your last name' id="" />
                <input className='w-80 block mt-5 mx-auto border-2 border-cyan-900 py-2 rounded px-6'  type="email" name="email" placeholder='Your Email' id="" />
                <input className='w-80 block mt-5 mx-auto border-2 border-cyan-900 py-2 rounded px-6'  type="email" name="email" placeholder='Your Phone' id="" />
                <input className='w-80 block mt-5 mx-auto border-2 border-cyan-900 py-2 rounded px-6'  type="password" name="password" placeholder='Enter a password' id="" />
                <input className='w-80 block mt-5 mx-auto border-2 border-cyan-900 py-2 rounded px-6'  type="password" name="cpassword" placeholder='Enter again your password' id="" />
                <input className='w-80 block mt-5 mx-auto bg-cyan-900 text-gray-50 py-3 rounded-md' type="submit" value='Register' />
            </form>
        </div>
    );
};

export default Register;