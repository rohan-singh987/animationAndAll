import React from 'react'
import selfie from '../../public/selfie.png'
import Image from 'next/image'
import animation from '../../public/a.gif'
import bg from '../../public/bg.gif'

const WorkWithUs = () => {
  return (
    <div className='flex flex-col my-20 bg-[#fcf6f1] rounded-3xl p-8 relative z-10'>
        <div className='absolute -top-24 right-36'>
            <Image src={animation} alt='' />
        </div>
        <div className='absolute w-[40%]  z-0 top-0 left-72'>
            <Image src={bg} className='w-full' alt='' />
        </div>
        <div className='z-10'>
            <p>
                Build out of frustation
            </p>
            <h2 className='font-bold text-3xl'>
                Meet the ahead App
            </h2>
        </div>
        <div className='flex lg:flex-row-reverse flex-col z-10 justify-center items-center'>
            <div className='lg:w-1/2 mx-auto'>
            <Image src={selfie} data-aos="zoom-in-up" data-aos-offset="300" className='lg:w-1/2 mx-auto' alt='' />
            </div>
            <div className='lg:w-1/2'>
                <p data-aos="fade-up" data-aos-offset="300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta sequi veniam, maxime consequuntur quos iusto ex deleniti repudiandae numquam!
                </p>
                <br />
                <p data-aos="fade-down" data-aos-offset="300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque et modi, deserunt tenetur sint, dolore corporis provident porro animi nesciunt delectus nihil suscipit possimus praesentium quibusdam laudantium repellat velit.</p>
            </div>
        </div>
    </div>
  )
}

export default WorkWithUs