import Hero from '@/sections/landing-page/Hero'
import Nav from '../components/major-components/Nav'
import React from 'react'
import Features from '@/sections/landing-page/Features'
import FAQ from '@/sections/landing-page/FAQ'
import Footer from '@/sections/landing-page/Footer'
import Newsletter from '@/sections/landing-page/Newsletter'

const LandingPage = () => {
  return (
    <div>
        <Nav className="fixed"/>
        <div className="mt-14 lg:mt-20">
          <Hero/>
          <Features/>
          <div className="bg-blue-500 text-white">
            <FAQ/>
          </div>
          <Newsletter />
          <div className="bg-blue-500 text-white">
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export default LandingPage