import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductById from '../../../../hooks/useProductById';

const ConfirmOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useProductById(id);
    
    const { image, name, supplier_name, price, quantity, _id, catagory, short_description } = product;
    const [totalExpens, setTotalExpense] = useState(0);
    const [selectedQuantity, setSeletedQuantity] = useState(1);
    const [deleveryCharge, setDelveryCharge] = useState(20);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const arr = [...Array(quantity).keys()];
    arr.shift();
    useEffect(() => {
        setTotalExpense(price * (selectedQuantity));
    }, [price, selectedQuantity]);
    useEffect(() => {
        if (totalExpens < 1000) {
            setDelveryCharge(30)
        }
        if (totalExpens > 1000) {
            setDelveryCharge(55)
        }
    }, [totalExpens]);
    const order = {
        product_id:_id,
        name: name,
        image: image,
        supplier_name: supplier_name,
        quantity:selectedQuantity,
        price_per_product: price,
        total: totalExpens + deleveryCharge,
        phone: phone,
        email: email,
        catagory: catagory,
        short_description: short_description   
    }
    const handleChangeOption=(e) => {
        setSeletedQuantity(e.target.value);
    }
    const handlePlaceOrder = () => {
        console.log(order);
    }
    
    return (
        <div className='w-80 md:w-5/12 shadow-xl mt-12 mx-auto p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='h-40' src={image} alt="" />
                    <h5>{name}</h5>
                    <h5 className='font-semibold'>Price:{price} Tk</h5>
                    <p>Choose quantity</p>
                    <select onChange={handleChangeOption} name="quantity" id="quantity">
                        {
                            arr.map(number => <option key={number} value={number}>{number}</option>)
                        }
                    </select>

                </div>
                <form action="">
                    <label className='block' htmlFor="Phone Number"> Your Phone Number</label>
                    <input onChange={(e)=>setPhone(e.target.value)}  className=' block border-2 border-cyan-900 px-2 py-1 rounded-sm' type="tel" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
                    <label className='block' htmlFor="Email"> Your Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)}  className=' block border-2 border-cyan-900 px-2 py-1 rounded-sm' type="email" name="phone" placeholder="example@gmail.com" required></input>
                    <p className='mt-2'>Delevery Charge: {deleveryCharge} Tk </p>
                    <p>Total Charge: {totalExpens + deleveryCharge} TK</p>
                </form>

            </div>
            <button onClick={handlePlaceOrder} className='w-40 block mt-5 mx-auto bg-cyan-900 text-gray-50 py-1 rounded-md'>Place Order</button>
        </div>
    );
};

export default ConfirmOrder;