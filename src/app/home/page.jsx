import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import TimelineSortof from '@/components/TimelineSortof'
import Vacancies from '@/components/Vacancies'
import VerCardSlider from '@/components/HorzCardSlider'
import WorkWithUs from '@/components/WorkWithUs'
import React from 'react'

const Home = () => {
    return (
        <div className='md:mx-12 mx-3'>
            <Navbar />
            <Header />
            <VerCardSlider />
            <TimelineSortof />
            <WorkWithUs />
            <Vacancies />
        </div>
    )
}

export default Home