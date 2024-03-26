import React from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
  

const FAQ = () => {
  return (
    <div className="max-w-[1440px] flex justify-center mx-auto">
        <div className="w-full mx-10  mt-10 lg:mt-20">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-gray-300">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full md:w-3/4 lg:w-1/2 mx-auto my-14">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left mx-4">
                        <b>Is your software solution suitable for freelancers as well as small businesses?</b>
                    </AccordionTrigger>
                    <AccordionContent className="bg-blue-600 text-white p-5 rounded-md">
                        Yes, our software is designed to meet the needs of both freelancers and small businesses. Whether you're a solo entrepreneur or have a small team, our solution can help streamline your operations and drive growth.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left mx-4">
                        <b>Can I customize invoices and appointment reminders with my branding?</b>
                    </AccordionTrigger>
                    <AccordionContent className="bg-blue-600 text-white p-5 rounded-md">
                        Absolutely! Our software allows you to customize invoices, appointment reminders, and other communications with your branding, ensuring a professional and consistent look across all customer interactions.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left mx-4">
                        <b>Does your software offer mobile access?</b>
                    </AccordionTrigger>
                    <AccordionContent className="bg-blue-600 text-white p-5 rounded-md">
                        Yes, our software is mobile-friendly and can be accessed from any device with an internet connection. Whether you're in the office, on the go, or working from home, you can manage your business from anywhere.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left mx-4">
                        <b>How secure is my data with your software?</b>
                    </AccordionTrigger>
                    <AccordionContent className="bg-blue-600 text-white p-5 rounded-md">
                        We take data security seriously and employ industry-standard security measures to protect your information. Our software uses encryption, secure connections, and regular backups to keep your data safe and secure.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left mx-4">
                        <b>What kind of support do you offer to customers?</b>
                    </AccordionTrigger>
                    <AccordionContent className="text-white p-5 rounded-md">
                        We provide comprehensive support to our customers, including email support, live chat assistance, and an extensive knowledge base with tutorials and FAQs. Our dedicated support team is here to help you every step of the way.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default FAQ