import Sidebar from '@/components/major-components/Sidebar'
import React from 'react'

const dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[5%]">
        Dashboard
      </div>
    </div>
  )
}

export default dashboard