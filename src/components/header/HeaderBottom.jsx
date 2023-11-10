import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBottom = () => {
  return (
    <>
          <header className="flex justify-between items-center bg-primary px-32 text-white p-3">
            <div className="w-2/12 flex gap-1 border-r-2 border-white">
            <i class="ri-bar-chart-horizontal-line"></i>
            <h1>Browse Categories</h1>
            </div>
            <div className="w-5/12 flex gap-8">
              <span>
                <Link to='/'>Home</Link>
              </span>
              <span>
                <Link to='/about'>About</Link>
              </span>
              <span>
                Shop
              <i class="ri-arrow-down-s-line"></i>
              </span>
              <span>
                Pages
              <i class="ri-arrow-down-s-line"></i>
              </span>
              <span>
                Blog
              <i class="ri-arrow-down-s-line"></i>
              </span>
            </div>

            <div className='flex justify-between gap-7'>
              <h1>Deal of the Day</h1>
              <h1>Hot Deals</h1>
              <h1>Best Sellers</h1>
              <h1>New Arrivals</h1>
            </div>
          </header>
    </>
  )
}

export default HeaderBottom