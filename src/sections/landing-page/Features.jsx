import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button" 
import { Link } from "react-router-dom"
import { FaArrowRight, FaFileInvoiceDollar } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

const Features = () => {
  return (
    <div className="max-w-[1440px] flex justfiy-center mt-16 mx-auto">
        <div className="w-full mx-10 ">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-blue-500">Features</h1>

            {/* Features Card Section */}
            <div className="flex flex-wrap gap-10 justify-evenly  my-12 md:my-20">
                <Card className="lg:w-[25%] w-full hover:scale-105 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-500">
                    <CardHeader>
                        <FaFileInvoiceDollar className="mx-auto text-4xl mb-2"/>
                        <CardTitle className="text-center text-xl">Streamlined Invoicing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Easily creates, customizes and send professional invoices to your clients with our intuitive invoice system
                        </p>
                    </CardContent>
                </Card>

                <Card className="lg:w-[25%] w-full hover:scale-105 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-500">
                    <CardHeader>
                        <MdInventory className="mx-auto text-4xl mb-2"/>
                        <CardTitle className="text-center text-xl">Inventory Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Keep track of your product inventory levels, manage stock and generate reports to optimize you inventory management process
                        </p>
                    </CardContent>
                </Card>

                <Card className="lg:w-[25%] w-full hover:scale-105 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-500">
                    <CardHeader>
                        <SiGoogleanalytics className="mx-auto text-4xl mb-2"/>
                        <CardTitle className="text-center text-xl">Advanced Analytics and Reporting</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Gain valuable insights into your business performance. Track key metrics, identify trends and make data-driven decisions to drive growth and profitability.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="text-center mb-10">
                <Link>
                    <Button className="">More Features <FaArrowRight  className="ml-2"/></Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Features