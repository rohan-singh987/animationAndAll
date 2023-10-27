import Image from 'next/image'
import React from 'react'
import density from '../../public/densityImg.webp'
import ani1 from '../../public/ani1.gif'
import human from '../../public/draw.png'


const Header = () => {
    return (
        <div className=' my-10'>
            <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center bg-[#EDECFC] rounded-3xl px-8 py-20'>
                <div className='lg:w-1/2 w-fit mx-auto lg:mb-0 mb-10'>
                    <div className='mx-auto'>
                        <Image src={human} className='w-2/3 lg:mx-0 mx-auto' alt=''/>
                    </div>
                    <p>
                        Ahead App
                    </p>
                    <h1 className='font-bold md:text-5xl text-2xl mx-auto'>
                        Mastering your life by mastering emotions
                    </h1>
                </div>
                <div className=''>
                    <Image src={density} className='w-2/3 mx-auto ' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Header