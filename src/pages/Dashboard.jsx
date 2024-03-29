import Sidebar from '@/components/major-components/Sidebar'
import { Button } from '@/components/ui/button'

import React from 'react'
import Cards from '@/sections/Dashboard/Cards'

import { FaDownload } from "react-icons/fa";

const dashboard = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="ml-[5%] w-full">
        <div className="mx-10 w-full">
          <div className="flex flex-wrap justify-between mt-10 gap-3">
            <h1 className="font-bold md:text-2xl">DASHBOARD OVERVIEW</h1>
            <Button className="my-auto"><FaDownload className="mr-3" /> Download Report</Button>
          </div>

          <div className="mt-5 lg:mt-8 mx-auto w-full">
            <Cards/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard