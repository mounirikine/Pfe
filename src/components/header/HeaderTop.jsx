import React from 'react';
import '../../../node_modules/remixicon/fonts/remixicon.css';

const HeaderTop = () => {
  return (
    <header className="flex justify-between items-center bg-primary px-32 text-white p-3">
      <div className='w-3/12'>
        <h2 className="text-xl font-semibold">Zeomart</h2>
      </div>
      <div className="container mx-auto w-6/12 ">
        <form>
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
          <select
                id="com"
                className="text-base text-gray-800 outline-none border-2 px-1 py-2 rounded-lg"
              >
                <option value="All Category" selected>
                All Category
                </option>
                <option value="net">Men</option>
                <option value="org">Women</option>
                <option value="io">Men</option>
              </select>
            <input
              className="text-base  flex-grow text-black outline-none px-2"
              type="text"
              placeholder="Search your Product .."
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto">
              
              <button className="bg-indigo-500 text-white text-base rounded-full py-2 px-3   font-thin">
              <i class="ri-search-line"></i>           
                </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-between gap-5 w-3/12 px-8  items-center">
        <div>
          <i className="ri-heart-line border text-xl border-gray p-2 rounded-xl m-1"></i> 
          <span>
            Wishlist <br />
          </span>
        </div>
        <div className=''>
          <i className="ri-user-line border text-xl border-gray p-2 rounded-xl m-1"></i>
          <span>
           Account
          </span>
        </div>
        <div>
          <i className="ri-shopping-cart-line border text-xl border-gray p-2 rounded-xl m-1"></i>
          <span>
            $200.99 
          </span>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default HeaderTop;
