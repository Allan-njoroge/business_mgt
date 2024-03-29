import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { IoAnalytics, IoPersonSharp } from "react-icons/io5";
import { LuAreaChart } from "react-icons/lu";
import { RiSurveyLine } from "react-icons/ri";


  

const Cards = () => {
    const cardDetails = [
        {
            title: "Sales",
            icon: IoAnalytics,
            number: '45,985',
            comparison: '+24.6%'
        }, {
            title: "Clients",
            icon: IoPersonSharp,
            number: '15,765',
            comparison: '+14.3%'
        }, {
            title: "Traffic",
            icon: LuAreaChart,
            number: '15,765',
            comparison: '+16.3%'
        }, {
            title: "Surveys",
            icon: RiSurveyLine,
            number: '2,503',
            comparison: '+8.3%'
        }

    ]

    const card = cardDetails.map((item, id) => {
        const Icon = item.icon
        return(
            <Card key={id} className="mx-auto w-full md:w-[70%] lg:w-[30%] bg-blue-500 text-white hover:scale-105 transition-all ease-in duration-300">
                <CardHeader>
                    <CardTitle className="flex gap-2 text-xl"> <Icon className="my-auto" /> {item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between">
                    <p className="text-gray-200">{item.number}</p>
                    <p className="text-green-400">{item.comparison}</p>
                </CardContent>
            </Card>
        )
    })

  return (
    <div className="w-full grid md:flex justify-between gap-10">{card}</div>
  )
}

export default Cards