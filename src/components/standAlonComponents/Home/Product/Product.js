import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, image, price, quantity, supplier_name } = product;
    const navigate = useNavigate();
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
            <button onClick={()=>navigate(`/confirmorder/${_id}`)} className='w-40 block mt-5 mx-auto bg-cyan-900 text-gray-50 py-1 rounded-md'>Place Order</button>
        </div>
    );
};

export default Product;