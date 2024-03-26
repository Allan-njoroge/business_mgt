import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { MdDashboard, MdOutlineInventory2, MdOutlineMenu } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { RiSurveyLine } from "react-icons/ri";

const Sidebar = () => {

    const links = [
        {
            icon: MdDashboard,
            title: "Dashboard",
            link: "/dashboard",
        }, {
            icon: LiaFileInvoiceDollarSolid,
            title: "Invoices",
            link: "/invoive",
        }, {
            icon: MdOutlineInventory2,
            title: "Inventory",
            link: "/inventory",
        }, {
            icon: RiSurveyLine,
            title: "Surveys",
            link: "/surveys",
        }, {
            icon: SiChatbot,
            title: "Chatbot",
            link: "/chatbot",
        }, 
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    }
    const openMenu = () => {
        setMenuOpen(true);
    }

    const dashLinks = links.map((items, index) => {
        const Icon = items.icon;
        return(
            <Link key={index} to={items.link}
            className={`flex gap-3 text-lg my-3 py-2 rounded-sm hover:pl-5 hover:text-black hover:border-l-8 border-black transiton-all ease-in-out duration-300 ${menuOpen }`}>

                {/* Icon and link to other sections of the dashboard*/}
                <Icon className={`my-auto ${menuOpen ? '' : 'mx-auto text-2xl'}`}/>
                <p className={` ${menuOpen ? '' : 'hidden'}`}>
                    {items.title}
                </p>
            </Link>
        )
    })

  return (
    <div className={`h-[100%] bg-blue-500 text-white fixed top-0 left-0 z-10 transition-all ease-in-out duration-300
    ${menuOpen ? 'w-2/3 lg:w-1/4': 'w-[12%] lg:w-[5%]'}`}>
        <div className={`${menuOpen ? 'mx-3 lg:mx-8' : 'mx-0'}`}>
            <div className="flex justify-center my-5 mx-auto">
                <h1 className={`font-bold text-lg lg:text-xl ${menuOpen ? '' : 'hidden mx-auto'}`}>ADMIN DASHBOARD</h1>

                <div className="my-auto text-3xl cursor-pointer mx-auto">
                    {menuOpen ? <IoMdClose onClick={ closeMenu }/> : <MdOutlineMenu onClick={ openMenu }/>}
                </div>
            </div>

            <ul className="mx-auto pt-10 border-t-2 border-gray-500/50 ">{dashLinks}</ul>
        </div>
    </div>
  )
}

export default Sidebar