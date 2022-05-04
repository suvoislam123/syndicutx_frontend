import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <form className='mb-20'>
                <label className='w-80 block mx-auto mt-5' htmlFor="name">Prduct Name</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="name" placeholder='Enter product name' id="name" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="image">Product Image URL</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="image" placeholder='Enter image url' id="image" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="email">Price in TK</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="price" placeholder='Enter Product price' id="price" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="quantity">Total Quantity</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="quantity" placeholder='Enter quantity amount' id="quantity" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="supplier_name">Supplier Name </label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="supplier_name" placeholder='Enter supplier Name' id="cpassword" required />
                <input className='w-80 block mx-auto bg-cyan-900 text-gray-50 py-3 rounded-md mt-4' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;