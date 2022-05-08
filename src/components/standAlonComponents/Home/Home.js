import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import './Home.css'
import Product from './Product/Product';
const Home = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <div className='banner-container'>
                <div className='banner-contents'>
                    <div className=''>
                        <img className='block mx-auto' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1651162869_5D_NMO_Banner.jpg" alt="" />
                    </div>
                    <h1 className='text-2xl md:text-3xl styledfont text-center mt-10 text-cyan-900' >Delivery Your Desired Grocery</h1>
                    <h2 className='text-2xl md:text-2xl text-center styledfont text-cyan-900'>To Your Door</h2>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <div className="input-group relative flex   items-stretch w-full mb-4">
                                <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                <button className='bg-cyan-900 text-white ml-2 rounded-md px-2'>Search</button>    
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="products-container grid grid-cols-1 md:grid-cols-3 gap-x-9">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    
                    ></Product>)
                }

            </div>
            <h1 className='text-center text-3xl mt-12 text-red-700 mb-3'>Why people With us </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-8 text-center ml-6 md:ml-16'>
                <div>
                    <img className='w-80 ' src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-27/Default/stores/chaldal/components/landingPage2/LandingPage/images/lp-features-1.jpg?v=2&q=low&webp=1" alt="" />
                    <h1 className='w-80 mt-2 mb-2 text-orange-600'>Convenient And Quick</h1>
                    <p className='w-80'>No waiting in traffic, no haggling, no worries carrying groceries, they're delivered right at your door.</p>
                </div>
                <div>
                    <img className='w-80 ' src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-27/Default/stores/chaldal/components/landingPage2/LandingPage/images/lp-features-2.jpg?q=low&webp=1" alt="" />
                    <h1 className='w-80 mt-2 mb-2 text-orange-600'>Freshly Picked</h1>
                    <p className='w-80'>Our fresh produce is sourced every morning, you get the best from us.</p>
                </div>
                <div>
                    <img className='w-80 ' src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-27/Default/stores/chaldal/components/landingPage2/LandingPage/images/lp-features-3.jpg?q=low&webp=1" alt="" />
                    <h1 className='w-80 mt-2 mb-2 text-orange-600'>A wide range of Products</h1>
                    <p className='w-80'>With 4000+ Products to choose from, forget scouring those aisles for hours.</p>
                </div>
                
            </div>
            <h1 className='text-center text-3xl mt-12 text-red-700 mb-3'>What are our Client Says</h1>
            <div className='ml-4'>
                <div className='flex justify-start align-center'>
                    <div>
                        <img className='h-20' src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-27/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_srabon_hasan.png?q=low&webp=1&alpha=1" alt="" />
                    </div>
                    <div>
                        <p className='mt-4 ml-4'>Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !</p>
                    </div>
                </div>
                <div className='flex justify-end align-center'>
                    
                    <div>
                        <p className='mt-4 mr-4 '>Loved the service! I urgently needed some stuffs and ordered it here and they delivered in less than an hour as promised! Thanks a lot for that.</p>
                    </div>
                    <div>
                        <img className='h-20 ' src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-27/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_shampa_shahriyar.png?q=low&webp=1&alpha=1" alt="" />
                    </div>
                </div>
                <div className='flex justify-start align-center'>
                    
                    
                    <div>
                        <img className='h-20 ' src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-27/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_ashfia_ahmed.png?q=low&webp=1&alpha=1" alt="" />
                    </div>
                    <div>
                        <p className='mt-4 mr-4 '>Loved the service! I urgently needed some stuffs and ordered it here and they delivered in less than an hour as promised! Thanks a lot for that.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;