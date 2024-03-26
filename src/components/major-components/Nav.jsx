import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if(menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen] );

    //This are the links of the website
    const Links = [
        {name: 'Home', link: '/'},
        {name: 'Features', link: '/'},
        {name: 'Pricing', link: '/'},
        {name: 'About Us', link: '/'},
        {name: 'Contact Us', link: '/'},
    ]

    const handleClick= () => {
        setMenuOpen(false);
    }

  return (
    <div className="bg-blue-600 text-white lg:h-20 h-14 fixed top-0 left-0 w-full z-10 shadow-md">
            <nav className="flex justify-between items-center h-full max-w-[1440px] mx-auto px-10">
            {/* Logo */}
            <div>
                <a href="" className="text-3xl font-bold">Glymm</a>
            </div>

            <div onClick={() => setMenuOpen(!menuOpen)} className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden transiton-all ease-in duration-700">
                { menuOpen ? <RiCloseFill /> : <RiMenu4Fill /> }
            </div>

            {/* Navbar Links */}
            <ul className={`md:flex md:items-center md:pb-0 py-12 md:py-0 absolute md:static md:bg-transparent bg-blue-600 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in duration-700 ${menuOpen ? 'top-14 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                {
                    Links.map((Links) => (
                        <li key={Links.name} className="px-4 py-2 rounded-md hover:text-gray-300">
                            <Link href={Links.link} onClick={handleClick}>{Links.name}</Link>
                        </li>
                    ))
                }
                <Button className="align-center my-auto bg-white text-blue-600 hover:text-white"><Link to={`/sign-up`}>Sign Up/Login</Link></Button>
            </ul>
        </nav>
    </div>
  )
}

export default Nav