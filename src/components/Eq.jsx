"use client";
import React, { useEffect } from 'react'
import rocket from '../../public/rocket.png'
import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from 'framer-motion';


const Eq = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const animationVariants = {
        hidden: { x: "-100%" },
        visible: { x: "320%" },
    };

    const animationTransition = {
        type: "spring",
        stiffness: 150,
        damping: 150,
    };

    useEffect(() => {

        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls])

    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 my-28 relative'>
            <motion.div className='absolute'
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={animationVariants}
                transition={animationTransition}
            >
                <Image src={rocket} className='relative bottom-0 hover:bottom-20 transition-all w-fit ' alt='' />
            </motion.div>
            <div>
                <h2 className='font-bold text-2xl text-center '>Eq Beats Iq</h2>
            </div>
            <div className='w-2/3 mx-auto lg:my-0 my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui quia nam. Molestiae, fugit laboriosam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quibusdam..</div>
            <div className='w-2/3 mx-auto lg:my-0 my-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod libero hic, pariatur iste vel earum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quibusdam.?</div>
        </div>
    )
}

export default Eq