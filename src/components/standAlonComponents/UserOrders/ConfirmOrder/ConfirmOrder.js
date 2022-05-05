import React from 'react';
import { useParams } from 'react-router-dom';
import useProductById from '../../../../hooks/useProductById';

const ConfirmOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useProductById(id);
    const { image, name, supplier_name, price, quantity, _id } = product;
    return (
        <div className='w-80 md:w-5/12 shadow-xl mt-12 mx-auto p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='h-40' src={image} alt="" />
                    <h5>{name}</h5>
                    {/* <h5 className='font-semibold'>Price:{price} Tk</h5> */}
                    <p>Choose quantity</p>
                    <select name="quantity" id="quantity">
                        {
                            [...Array(quantity).keys()].map(number => <option key={number} value={number}>{number + 1}</option>)
                        }
                    </select>
                    
                </div>
                <form action="">
                    <label htmlFor="Phone Number"> Your Phone Number</label>
                    <input className='border-2 border-cyan-900 px-2 py-1 rounded-sm' type="tel" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
                    <label htmlFor="Email"> Your Email</label>
                    <input className='border-2 border-cyan-900 px-2 py-1 rounded-sm' type="email"  name="phone" placeholder="example@gmail.com" required></input>
                </form>
                
            </div>
            <button className='w-40 block mt-5 mx-auto bg-cyan-900 text-gray-50 py-1 rounded-md'>Place Order</button>
        </div>
    );
};

export default ConfirmOrder;