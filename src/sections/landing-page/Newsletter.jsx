import { Button } from '@/components/ui/button'
import React from 'react'

const Newsletter = () => {
  return (
    <div className="max-w-[1440px] flex justfiy-center mx-auto">
        <div className="mx-auto my-10 lg:my-20">
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl text-blue-500">Subscribe to Our Newsletter</h1>
            <form action="" method="POST" className="my-5 mx-auto text-center">
                <input type="email" placeholder="johndoe@gmail.com" className="border-2 border-blue-500 rounded-md  py-1 lg:py-2 px-3 w-full"/><br />
                <Button type="submit" className="my-2">Subscribe</Button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter