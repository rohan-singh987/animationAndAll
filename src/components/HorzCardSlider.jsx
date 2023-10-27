"use client";
import React, { useRef } from 'react'
import video from '../../public/flowerrr.mp4'
import rocket from '../../public/rocketRobo.png'
import Cards from './Cards';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const cards = [
    {
        id: 1,
        title: "You argue with college",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam quos dicta repellendus quidem necessitatibus itaque praesentium porro vero a.",
        bg: "#ddf1fd",
    },
    {
        id: 2,
        title: "You get a promotion",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam quos dicta repellendus quidem necessitatibus itaque praesentium porro vero a.",
        bg: "#edeafc",
    },
    {
        id: 3,
        title: "You attend a college reunion",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam quos dicta repellendus quidem necessitatibus itaque praesentium porro vero a.",
        bg:"#c6ffd6",
    },
    {
        id: 4,
        title: "You get a promotion",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam quos dicta repellendus quidem necessitatibus itaque praesentium porro vero a.",
        bg:"#fcf0d7",
    },
]

const VerCardSlider = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-35%", "40%"]);

    return (
        <div>
            <div className='flex justify-start items-center'>
                <h2 className='font-bold md:text-4xl text-2xl'>
                    Does this sound familiar....
                </h2>
                <div className='w-[7%] ms-7'>
                    <video loop autoPlay={true} muted className='w-fit' >
                        <source src={video} />
                    </video>
                </div>
            </div>

            <section ref={targetRef} className="relative py-16  ">
                <div className="sticky top-0 flex h-1/3 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-10">
                        {cards.map((card) => {
                            return <Cards card={card} key={card.id} />;
                        })}
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default VerCardSlider