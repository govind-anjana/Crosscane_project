import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Banner from './components/Banner'
import HomeShowcase from './components/HomeShowcase'
import ProductGrid from './components/ProductGrid'
import WhyChoose from './components/WhyChoose'
import CTA from './components/CTA';
import CountDown from './components/CountDown';

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Banner/>
       <ProductGrid />
       <CountDown/>
       <HomeShowcase />
       <CTA/>
       <WhyChoose />
       <Footer/>
    </div>
  )
}





export default Home
