import React from 'react'

const Cards = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[300px] w-[400px] overflow-hidde"
        >
            <div
                style={{
                    //   backgroundImage: `url(${card.url})`,
                    background: `${card.bg}`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 rounded-2xl duration-300 transition-all group-hover:-rotate-12"
            ></div>
            <div className="absolute p-8 inset-0 z-10 grid place-content-center group-hover:-rotate-12 transition-all">
                <h2 className="bg  font-black uppercase text-black ">
                    {card.title}
                </h2>
                <p className='text-sm'>
                 {card.para}
                </p>
            </div>
        </div>
    )
}

export default Cards