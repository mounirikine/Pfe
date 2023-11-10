import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

const Header = () => {
  return (
    <div className='bg-indigo-800'>
        <HeaderTop />
       <hr  className='w-11/12 mx-auto' />
        <HeaderBottom />
    </div>
  )
}

export default Header