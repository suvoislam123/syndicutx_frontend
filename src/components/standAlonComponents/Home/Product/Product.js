import React from 'react';

const Product = ({ product }) => {
    const { name, image, price, quantity, supplier_name } = product;
    const handlePlaceOrder = () => {
        const c = window.confirm('Are you sure?');
    }
    return (
        <div className='w-80 shadow-xl mt-12 mx-auto p-12'>
            <img className='h-40' src={image} alt="" />
            <h5>{name}</h5>
            <p>{ supplier_name}</p>
            <h5 className='font-semibold'>Price:{price} Tk</h5>
            <p>Choose quantity</p>
            <select name="quantity" id="quantity">
                {
                    [...Array(quantity).keys()].map(number => <option key={number} value={number}>{ number+1}</option>)
                } 
            </select>
            <button onClick={handlePlaceOrder} className='w-40 block mt-5 mx-auto bg-cyan-900 text-gray-50 py-1 rounded-md'>Place Order</button>
        </div>
    );
};

export default Product;