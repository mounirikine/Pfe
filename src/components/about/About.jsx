import React from 'react'
import img1 from '../../assets/about/apparel3.jpg'

const About = () => {
  return (
    <>
    <section className='flex py-20 px-32 justify-between'>
        <div className="w-5/12 py-20">
            <h1 className='text-5xl font-bold  mb-10'>Our Story</h1>
                <p className='mb-5 pr-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit id impedit nam, velit, necessitatibus optio facilis modi explicabo dolores amet. Id accusantium pariatur quasi blanditiis porro incidunt quae dolor!
                </p>
                <p className='mb-5 pr-20'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eveniet deserunt corrupti nulla repellat numquam vel blanditiis eius. Distinctio provident facere quibusdam asperiores illo consequuntur nobis ad vitae autem voluptates!
                </p>

        </div>
        <div className="w-5/12">

            <img src={img1} alt="" className='w-[60%]' />
        </div>
    </section>
    </>
  )
}

export default About
