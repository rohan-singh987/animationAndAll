import React from 'react'
import video from '../../public/flowerrr.mp4'
import Cards from './Cards';

const cards = [
    {
        id: 1,
        title: "You argue with college",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam quos dicta repellendus quidem necessitatibus itaque praesentium porro vero a."
    },
    {
        id: 2,
        title: "You get a promotion",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam quos dicta repellendus quidem necessitatibus itaque praesentium porro vero a."
    },
    {
        id: 3,
        title: "You attend a college reunion",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam quos dicta repellendus quidem necessitatibus itaque praesentium porro vero a."
    },
]

const VerCardSlider = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <div>
            <div className='flex justify-start items-center'>
                <h2 className='font-bold md:text-4xl text-2xl'>
                    Does this sound familiar....
                </h2>
                <div className='w-[7%] ms-7'>
                    <video loop src={video} className='w-fit' />
                </div>
            </div>

            <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4">
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