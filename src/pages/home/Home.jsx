import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Banner from './components/Banner'
import Features from './components/Features'
import CountDown from './components/CountDown'
import FeaturedProducts from './components/FeaturedProducts'
import CTA from './components/CTA'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Banner/>
       <Features/>
       <CountDown />
       <FeaturedProducts/>
       <CTA/>
       <Footer/>
    </div>
  )
}





export default Home
