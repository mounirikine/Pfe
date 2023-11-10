import React from 'react'

const Footer = () => {
  return (
   <>
   <div className="bg-black text-white py-14 flex px-12">
    <div className='px-20 w-10/12'>
        <table className='w-[100%]'>
            <thead>
              <tr>
                <th className='text-left text-lg py-3'>Excluive</th>
                <th className='text-left text-lg py-3'>Support</th>
                <th className='text-left text-lg py-3'>Account</th>
                <th className='text-left text-lg py-3'>Quick Link</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='pb-4'  >Subscibe</td>
                    <td className='pb-4'></td>
                    <td className='pb-4'>My Account</td>
                    <td className='pb-4'>Privacy Policy</td>
                    
                </tr>
                <tr>
                    <td className='pb-4' ><p>Get 10% off your first order</p></td>
                    <td className='pb-4'>excluive@gmail.com</td>
                    <td className='pb-4'>Login /Register</td>
                    <td className='pb-4'>Terms Of Use</td>
                </tr>
                <tr>
                    <td className='pb-4'></td>
                    <td className='pb-4'><p>+123-456-789</p></td>
                    <td className='pb-4'>Cart</td>
                    <td className='pb-4'>FAQ</td>
                </tr>
                <tr>
                    <td className='pb-4'></td>            
                    <td className='pb-4'></td> 
                    <td className='pb-4'>Wishlist</td>           
                    <td className='pb-4'>Contact</td>
                </tr>
                <tr>
                    <td className='pb-4'></td>
                    <td className='pb-4'></td>
                    <td className='pb-4' >Shop</td>
                    <td className='pb-4'></td>
                </tr>
              

            </tbody>
        </table>
    </div>
    <div className="w-2/12">
        <h1 className='text-xl'>Download App</h1>

        <p className='text-sm py-4'>Save $3 with App New User Only</p>

        <div className="flex gap-5 jitems-center">
        <i class="ri-instagram-line"></i>
        <i class="ri-facebook-circle-line"></i>
        <i class="ri-github-fill"></i>
        <i class="ri-linkedin-fill"></i>
        </div>
    </div>
    
   </div>
   </>
  )
}

export default Footer