import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminOrdersItem = ({ order }) => {
    const { image, phone, email, product_id, catagory, address, name, price_per_product, total, quantity, price, order_date
, supplier_name, short_description } = order;
    
    return (
        <tr className="bg-white border-b">
            <td className="px-2 w-1/12 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {name}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                <img className='h-20 w-24' src={image} alt="" />
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-pre-wrap w-2">
                {order_date} 
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {email}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {phone}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {address}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {quantity}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {total}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap text-center">
                <button className='bg-orange-400 py-1 px-8 rounded-md text-white'>Deliver</button>
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap text-center">
                <button  className='bg-red-600 py-1 px-8 rounded-md text-white'>Reject Order</button>
            </td>

        </tr>
    );
};

export default AdminOrdersItem;