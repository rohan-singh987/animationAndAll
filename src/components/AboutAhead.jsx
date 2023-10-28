import React from 'react'

const AboutAhead = () => {
    return (
        <div className='bg-[#F2F0FE] px-8 py-10 rounded-3xl mb-10 flex lg:flex-row flex-col lg:justify-between justify-center'>
            <div className='flex flex-col justify-between bg-white lg:w-[40%] w-full lg:my-0 my-10  rounded-2xl '>
                <div className='flex flex-col  p-8'>
                    <h2 className='font-semibold text-2xl mb-4'>
                        About
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corporis aliquam error laborum repudiandae vitae suscipit soluta nobis aut itaque assumenda voluptatem ad tempora non dicta recusandae modi, ipsum totam?
                    </p>
                </div>
                <div className='flex flex-col bg-[#FCF6F1] rounded-2xl  p-8'>
                    <h2 className='font-semibold text-2xl mb-4'>
                        Product
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis est dolorem eius facilis? Quidem, quos!
                    </p>
                </div>
            </div>
            <div className='lg:h-[34rem] w-full overflow-scroll'>
                <div className='lg:w-[40%] w-max  lg:ms-auto lg:flex lg:flex-col grid grid-rows-1 grid-flow-col gap-4'>
                    <div className='bg-white p-8 rounded-2xl'>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad.
                        </h2>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nam exercitationem minus sit eaque dicta nemo iste consequatur quasi delectus.
                        </p>
                    </div>
                    <div className='bg-white p-8 rounded-2xl'>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nam exercitationem minus sit eaque dicta nemo iste consequatur quasi delectus.
                        </p>
                    </div>
                    <div className='bg-white p-8 rounded-2xl'>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nam exercitationem minus sit eaque dicta nemo iste consequatur quasi delectus.
                        </p>
                    </div>
                    <div className='bg-white p-8 rounded-2xl'>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nam exercitationem minus sit eaque dicta nemo iste consequatur quasi delectus.
                        </p>
                    </div>
                    <div className='bg-white p-8 rounded-2xl'>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nam exercitationem minus sit eaque dicta nemo iste consequatur quasi delectus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAhead