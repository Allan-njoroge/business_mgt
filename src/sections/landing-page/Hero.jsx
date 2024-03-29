import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import HeroImage from '../../assets/images/HeroImage.jpg'

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-16 lg:py-20">
        <div className="flex-row-reverse grid grid-cols-1 lg:grid-cols-2 items-center text-center lg:text-left">
            {/* Hero Section Text Area */}
            <div className="my-auto lg:ml-10 mx-auto px-10">
                <h1 className=" text-3xl lg:text-5xl font-semibold text-blue-500">Welcome to Glymm</h1>
                <p className="my-5 lg:my-8 text-sm">
                    Unlock the potential of your business. Simplify your finances, streamline appointment management, empower your team, and gain actionable insights to drive growth.
                </p>
                <div className="flex gap-5">
                    <Link to={`/sign-up/`} className="hidden lg:block"><Button>Get Started</Button></Link>
                    <Link to={`/dashboard`} className="hidden lg:block"><Button>Demo</Button></Link>
                </div>
            </div>

            {/* Hero Image Section*/}
            <div className="mr-10 mx-auto w-full mb-10">
                <img src={ HeroImage } alt="" className="w-[90%] lg:w-[600px] rounded-md mx-auto align-center" />
            </div>
            <div className="flex justify-center gap-5">
                <Link to={`/sign-up/`} className="lg:hidden"><Button>Get Started</Button></Link>
                <Link to={`/dashboard`} className="lg:hidden"><Button>Demo</Button></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero