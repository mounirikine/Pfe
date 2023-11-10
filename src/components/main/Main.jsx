import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../assets/slider1/f1.jpg';
import img2 from '../../assets/slider1/f2.jpg';
import img3 from '../../assets/slider1/f3.jpg';
import img4 from '../../assets/slider1/f4.jpg';

import brand1 from '../../assets/brands/service-1.png'
import brand2 from '../../assets/brands/service-2.png'
import brand3 from '../../assets/brands/service-3.png'

import offer_pub from '../../assets/offers_pub/pub.png'

import gall1 from '../../assets/gallery/gallery-1.png'
import gall2 from '../../assets/gallery/gallery-2.png'
import gall3 from '../../assets/gallery/gallery-3.png'
import gall4 from '../../assets/gallery/gallery-4.png'


import {Today_Products ,our_prodcuts } from '../../api/data.js';





const Main = () => {
  const [countdown, setCountdown] = useState({
    days: 100,
    hours: 23,
    minutes: 14,
    seconds: 39,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        let newCountdown = { ...prevCountdown };

        if (newCountdown.seconds > 0) {
          newCountdown = { ...newCountdown, seconds: newCountdown.seconds - 1 };
        } else if (newCountdown.minutes > 0) {
          newCountdown = {
            ...newCountdown,
            minutes: newCountdown.minutes - 1,
            seconds: 59,
          };
        } else if (newCountdown.hours > 0) {
          newCountdown = {
            ...newCountdown,
            hours: newCountdown.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (newCountdown.days > 0) {
          newCountdown = {
            ...newCountdown,
            days: newCountdown.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <div className="px-20 flex justify-between">
          <div className='w-2/12  py-10 '>
            <ul className='flex flex-col gap-3 border-r-2 border-indigo-500 '>
              <li className='text-lg hover:text-indigo-800'><Link>Woman's Fashion</Link></li>
              <li className='text-lg hover:text-indigo-800'><Link>Man's Fashion</Link></li>
              <li className='text-lg hover:text-indigo-800'><Link>Electronics</Link></li>
              <li className='text-lg hover:text-indigo-800'><Link>Home & Lifestyle</Link></li>
              <li className='text-lg hover:text-indigo-800'><Link>Medcine</Link></li>
              <li className='text-lg hover:text-indigo-800'><Link>Sport & Outrdoor </Link></li>
              <li className='text-lg hover:text-indigo-800'><Link>Baby's & Toys</Link></li>
              <li className='text-lg hover:text-indigo-800'><Link>Groceries & Pets</Link></li>
              <li className='text-lg hover:text-indigo-800 py-20'></li>
            </ul>
          </div>
          <div className="w-5/12 px-10">
            <h1 className="text-5xl font-bold py-9 space-x-3 mb-5 mt-20">
              GET STARTED YOUR BEST SHOPPING
            </h1>
            <p className="mb-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa odio perferendis aliquam eligendi dolorum dicta. Omnis, ipsa quae ex autem magni nam libero laudantium, corporis commodi rerum ullam voluptatibus.
            </p>
            <button className="bg-indigo-800 px-10 py-1 rounded-lg text-lg text-white">
              Get Started
            </button>
          </div>
          <div className="w-5/12 mt-10">
            <Carousel showStatus={false} autoPlay infiniteLoop>
              <div>
                <img src={img1} alt="Image 1" />
              </div>
              <div>
                <img src={img2} alt="Image 2" />
              </div>
              <div>
                <img src={img3} alt="Image 3" />
              </div>
              <div>
                <img src={img4} alt="Image 4" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    
      <section>
      <div className='px-20 flex gap-2'>
            <span className='px-3  py-6 rounded-sm bg-indigo-700'></span>
            <h1 className='text-indigo-700 my-auto text-xl font-semibold'>Today's</h1>
          </div>
       
        <div className="w-8/12 flex gap-5 px-20 py-5">
         
          <h1 className="text-3xl font-semibold">Top Deals Of The Day</h1>
          <span className="flex text-3xl text-amber-400">
            {countdown.days}
            <p className="text-black px-3 text-xl m-auto">Days:</p>
            {countdown.hours}
            <p className="text-black px-3 text-xl m-auto">Hours :</p>
            {countdown.minutes}
            <p className="text-black px-3 text-xl m-auto">Minutes :</p>
            {countdown.seconds}
            <p className="text-black px-3 text-xl m-auto">Seconds</p>
          </span>
        </div>
        <div className="container flex mx-auto px-32 my-8">
            {/* <Carousel
              showThumbs={false}      // Hide slider points
              emulateTouch={true}   // Allow touch gestures for mobile devices
              centerMode={true}     // Center the active slide
              centerSlidePercentage={18} // Adjust how much of adjacent slides should be visible
              showStatus={false} autoPlay infiniteLoop  // Hide status indicators
              showIndicators={false} // Hide pagination links

            > */}
              {Today_Products.map((item, index) => (
                <div key={index} className="product-card mx-2">
                  <span className='bg-red-500 rounded-md px-1 text-white bottom-[-270px] translate-x-2 absolute'>-40%</span>
                  
                  <img src={item.img} alt={item.Title} className="w-[400px] " />
                
                  <h1 className='text-left'>{item.Title}</h1>
                 <div className='flex gap-3 items-center '>
                 <span className="text-red-600 font-medium">${item.price}</span>
                  <span className="text-gray-600"><del >${item.old_price}</del></span>
                 </div>
                  <span  className='flex gap-4'>
                    <span className='flex gap-1'>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    </span>
                    ({item.quantity})</span>
                </div>
              ))}
            {/* </Carousel> */}
          </div>

                <div className='mx-auto text-center'>
                <button className=' bg-indigo-800 text-white px-20 my-10 py-2 font-semibold text-lg rounded-lg '>View All Products</button>
                </div>
      </section>

      <hr  className='w-11/12 mx-auto  '/>

      <section className='py-8'>
          <div className='px-20 flex gap-2'>
            <span className='px-3  py-6 rounded-sm bg-indigo-700'></span>
            <h1 className='text-indigo-700 my-auto text-xl font-semibold'>
              Categories
            </h1>
          </div>

          <h1 className="text-4xl font-bold px-20 py-3">Browse By Category</h1>


          <div className='flex justify-center items-center gap-3 px-40  py-8' >
            <button className='border border-black rounded-md w-[100%] hover:bg-indigo-800 hover:text-white p-14'> <i class=" text-6xl ri-smartphone-line"></i> <h1 className='text-center translate-y-10 text-lg'>Phones</h1> </button>
            <button className='border border-black rounded-md w-[100%] hover:bg-indigo-800 hover:text-white p-14'><i class=" text-6xl ri-computer-line"></i><h1 className='text-center translate-y-10 text-lg'>Computers</h1></button>
            <button className='border border-black rounded-md w-[100%] hover:bg-indigo-800 hover:text-white p-14'><i class=" text-6xl ri-timer-2-line"></i><h1 className='text-center translate-y-10 text-lg'>SmartWatch</h1></button>
            <button className='border border-black rounded-md w-[100%] hover:bg-indigo-800 hover:text-white p-14'><i class=" text-6xl ri-camera-line"></i><h1 className='text-center translate-y-10 text-lg'>Camera</h1></button>
            <button className='border border-black rounded-md w-[100%] hover:bg-indigo-800 hover:text-white p-14'><i class=" text-6xl ri-headphone-line"></i><h1 className='text-center translate-y-10 text-lg'>HeadPhones</h1></button>
            <button className='border border-black rounded-md w-[100%] hover:bg-indigo-800 hover:text-white p-14'><i class=" text-6xl ri-gamepad-line"></i><h1 className='text-center translate-y-10 text-lg'>Gaming</h1></button>
          </div>
      </section>

      <hr  className='w-11/12 mx-auto  '/>

      <section className='py-8'>
          <div className='px-20 flex gap-2'>
            <span className='px-3  py-6 rounded-sm bg-indigo-700'></span>
            <h1 className='text-indigo-700 my-auto text-xl font-semibold'>
              This Month
            </h1>
          </div>

          <h1 className="text-4xl font-bold px-20 py-3">Best Selling Products</h1>


          <div className="container flex mx-auto px-32 my-8">
            {/* <Carousel
              showThumbs={false}      // Hide slider points
              emulateTouch={true}   // Allow touch gestures for mobile devices
              centerMode={true}     // Center the active slide
              centerSlidePercentage={18} // Adjust how much of adjacent slides should be visible
              showStatus={false} autoPlay infiniteLoop  // Hide status indicators
              showIndicators={false} // Hide pagination links

            > */}
              {Today_Products.map((item, index) => (
                <div key={index} className="product-card mx-2">
                  <span className='bg-red-500 rounded-md px-1 text-white bottom-[-270px] translate-x-2 absolute'>-40%</span>
                  
                  <img src={item.img} alt={item.Title} className="w-[400px] " />
                
                  <h1 className='text-left'>{item.Title}</h1>
                 <div className='flex gap-3 items-center '>
                 <span className="text-red-600 font-medium">${item.price}</span>
                  <span className="text-gray-600"><del >${item.old_price}</del></span>
                 </div>
                  <span  className='flex gap-4'>
                    <span className='flex gap-1'>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    </span>
                    ({item.quantity})</span>
                </div>
              ))}
            {/* </Carousel> */}
          </div>

          <hr  className='w-11/12 mx-auto  '/>
          <div className='px-32 py-4'>
            <img src={offer_pub} alt="" className='my-10' />
          </div>
         
      </section>

      <section>
      <div className='px-20 flex gap-2'>
            <span className='px-3  py-6 rounded-sm bg-indigo-700'></span>
            <h1 className='text-indigo-700 my-auto text-xl font-semibold'>
                Our Products
            </h1>
          </div>

          <h1 className="text-4xl font-bold px-20 py-3">Expolore Our Products</h1>

          <div className="container  grid grid-cols-5 mx-auto px-64 gap-3 my-8">
            {/* <Carousel
              showThumbs={false}      // Hide slider points
              emulateTouch={true}   // Allow touch gestures for mobile devices
              centerMode={true}     // Center the active slide
              centerSlidePercentage={18} // Adjust how much of adjacent slides should be visible
              showStatus={false} autoPlay infiniteLoop  // Hide status indicators
              showIndicators={false} // Hide pagination links

            > */}
              {our_prodcuts.map((item, index) => (
                <div key={index} className="product-card mb-5 ">
                  {/* <span className='bg-red-500 rounded-md px-1 text-white bottom-[-270px] translate-x-2 absolute'>-40%</span> */}
                  
                  <img src={item.img} alt={item.Title} className="w-[200px] " />
                
                  <h1 className='text-left'>{item.Title}</h1>
                 <div className='flex gap-3 items-center '>
                 <span className="text-red-600 font-medium">${item.price}</span>
                  <span className="text-gray-600"><del >${item.old_price}</del></span>
                 </div>
                  <span  className='flex gap-4'>
                    <span className='flex gap-1'>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    <i class="ri-star-fill text-amber-300"></i>
                    </span>
                    ({item.quantity})</span>
                </div>
              ))}
            {/* </Carousel> */}
          </div>


          <div className='mx-auto text-center'>
                <button className=' bg-indigo-800 text-white px-20 my-10 py-2 font-semibold text-lg rounded-lg '>View All Products</button>
                </div>
      </section>


      <section>
      <div className='px-20 flex gap-2'>
            <span className='px-3  py-6 rounded-sm bg-indigo-700'></span>
            <h1 className='text-indigo-700 my-auto text-xl font-semibold'>
              Featured
            </h1>
          </div>

          <h1 className="text-4xl font-bold px-20 py-3">New Arrival</h1>

                <div className=" mx-auto px-32 py-8 flex gap-2 items-center mb-5" >
                  <div className="w-6/12">
                    <img src={gall1} alt="" className='w-[100%]' />
                <div className=' translate-y-[-100px] px-5 text-white'>
                <h1 className='text-lg font-bold'>PlayStation 5</h1>
                <p>black and White version of the PS5 coming out on sale</p>

                   
                    <Link className='underline py-2'>Shop Now</Link>
                </div>
                  </div>
                  <div className="w-6/12 flex flex-col gap-2">
                  <img src={gall2} alt=""   className='w-[100%]'  />
                  <div className=' translate-y-[-100px] px-5 text-white'>
                <h1 className='text-lg font-bold'>Woman's Collectins </h1>
                    <p>Featured woman collection that give you another vibe</p>
                    <Link className='underline'>Shop Now</Link>
                </div>
                  <div className='flex gap-2 translate-y-[-70px]'>
                  <img src={gall3} alt="" className='w-[50%]' />
                  <img src={gall4} alt="" className='w-[50%]' />

                  </div>
                  </div>
                </div>


                <div className=" flex items-center justify-between px-52 py-5 gap-20">
                  <span>
                    <img src={brand1}  className='mx-auto' />
                    <h1 className='text-center text-xl my-3 font-bold'>FREE AND FAST DELiVERY</h1>
                    <p className='text-center text-base'>Free delivery for all orders over $140</p>
                  </span>
                  <span>
                    <img src={brand2} className='mx-auto'   />
                    <h1  className='text-center text-xl my-3 font-bold'>24/7 CUSTOMER SERVICE</h1>
                    <p className='text-center text-base'>Friendly 24/7 customer support</p>
                    </span>
                  <span>
                  <img src={brand3}  className='mx-auto'  />
                  <h1 className='text-center text-xl my-3 font-bold'>MONEY BACK GUARTNTEE</h1>
                    <p className='text-center text-base'>We reurn money within 30 days</p>
                   
                    </span>
                </div>
      </section>
    </>
  );
};

export default Main;
