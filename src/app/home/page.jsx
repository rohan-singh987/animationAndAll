import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import TimelineSortof from '@/components/TimelineSortof'
import Vacancies from '@/components/Vacancies'
import VerCardSlider from '@/components/HorzCardSlider'
import WorkWithUs from '@/components/WorkWithUs'
import React from 'react'
import Eq from '@/components/Eq'
import Aos from 'aos'

const Home = () => {
    return (
        <div className='md:mx-12 mx-3'>
            <Navbar />
            <Header />
            <Eq />
            <VerCardSlider />
            <TimelineSortof />
            <WorkWithUs />
            <Vacancies />
        </div>
    )
}

export default Home