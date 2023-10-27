"use client";
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Image from 'next/image';
import dragon from '../../public/dragHuman.png'

const TimelineSortof = () => {
    return (
        <div className=' mx-auto relative'>
            <div className='w-1/3 absolute dragon'>
                <Image src={dragon} alt='' className='w-fit' />
            </div>
            <Timeline className=''>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent data-aos="fade-right" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Its not easy as 123
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sapiente est similique cum odit pariatur placeat mollitia doloremque incidunt! Commodi!
                        </p>
                    </TimelineContent>
                </TimelineItem><TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent data-aos="fade-left" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Its not easy as 123
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sapiente est similique cum odit pariatur placeat mollitia doloremque incidunt! Commodi!
                        </p>
                    </TimelineContent>
                </TimelineItem><TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent data-aos="fade-left" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Its not easy as 123
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sapiente est similique cum odit pariatur placeat mollitia doloremque incidunt! Commodi!
                        </p>
                    </TimelineContent>
                </TimelineItem><TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent data-aos="fade-right" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Its not easy as 123
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sapiente est similique cum odit pariatur placeat mollitia doloremque incidunt! Commodi!
                        </p>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default TimelineSortof