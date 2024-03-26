import React from 'react'
import { FaRegCopyright, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="max-w-[1440px] flex justify-center w-full mx-auto">
      <div className="my-5  block md:flex justify-between w-full mx-10 flex-wrap text-center">
        <h1 className="md:my-auto my-3 text-2xl">Glymm</h1>
        <p className="flex my-3 md:my-auto"> <FaRegCopyright className="my-auto mx-2"/> 2024 Glymm. All Rights Reserved</p>
        <div className="flex justify-center my-auto gap-3 text-2xl">
          <FaXTwitter />
          <CiInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  )
}

export default Footer