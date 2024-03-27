import Sidebar from '@/components/major-components/Sidebar'
import { Button } from '@/components/ui/button'

import React from 'react'
import Cards from '@/sections/Dashboard/Cards'

import { FaDownload } from "react-icons/fa";

const dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[5%] w-full">
        <div className="mx-10">
          <div className="flex justify-between mt-10">
            <h1 className="font-bold text-2xl">DASHBOARD OVERVIEW</h1>
            <Button className="my-auto"><FaDownload className="mr-3" /> Download Report</Button>
          </div>

          <div className="mt-5 lg:mt-8">
            <Cards/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard