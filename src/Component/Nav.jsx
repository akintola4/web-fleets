
import { Link } from 'react-router-dom'


import DarkSwitcher from "./DarkSwitcher"
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react';


export default function Nav() {

    // now we create a toogle menu for the navabr 

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="fixed inset-x-0 top-0 md:px-4 xl:px-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  z-10 bg-gray-950  dark:bg-gray-950 text-black dark:text-white   bg-clip-padding  w-12/12">

            <nav className="flex items-center p-3 justify-between" aria-label="Global">
                <Link to="/" className="flex  hover:text-black dark:hover:text-white flex-row lg:items-center lg:justify-center gap-2 w-4/12  lg:w-2/12">

                    <img src="/img/web-fleet-light.svg" className="w-10/12  md:w-6/12" alt="logo" id='home' name='home' aria-label='home' />
                </Link>
                <div className=" flex-row items-center hidden gap-20 text-white xl:gap-32 bg-gray-950 dark:bg-gray-950  rounded-lg py-2 px-3 justify-center  lg:flex ">
                    <div className="relative text-md  w-fit block hover:text-red-700 after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-800  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        <Link to="/" className="flex hover:text-red-700 flex-row gap-2 items-center">
                            Home
                        </Link>
                    </div>


                    <div className="relative text-md w-fit block hover:text-red-700 after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        <a
                            href="#services" // Use the section ID
                            className="flex hover:text-red-700 flex-row gap-2 items-center"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('services')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            Our services
                        </a>
                    </div>
                    <div className="relative text-md w-fit block hover:text-red-700 after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
    <a 
        href="#Fleets" // Use the section ID
        className="flex hover:text-red-700 flex-row gap-2 items-center"
        onClick={(e) => {
            e.preventDefault();
            document.getElementById('Fleets')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }}
    >
        Fleets
    </a>
</div>
<div className="relative text-md w-fit block hover:text-red-700 after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
    <a 
        href="#About" // Use the section ID
        className="flex hover:text-red-700 flex-row gap-2 items-center"
        onClick={(e) => {
            e.preventDefault();
            document.getElementById('About')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }}
    >
        About
    </a>
</div>
                </div>

                <div className="nav-3  xl:w-3/12 flex items-end justify-end">
                    <div className=" flex-row hidden gap-3 lg:flex items-center ">
                        <button className='px-4 py-2 bg-gray-50 text-gray-950 hover:bg-red-700 hover:border-transparent hover:text-gray-50 dark:bg-red-700 dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50    transition ease-in-out  delay-150 duration-300  rounded-lg'>Book Now</button>

                        <DarkSwitcher />
                    </div>
                    <button
                        className="flex p-2 rounded-md text-white outline-none cursor-pointer mobile-menu-button lg:hidden hover:bg-none hover:text-black" onClick={toggleMenu}>
                        <RxHamburgerMenu className="text-2xl" /></button>

                </div>

            </nav>
            <div className={`lg:hidden mobile-menu ${isOpen ? "" : "hidden "}`}>
                <div className="gap-20 mx-auto">
                    <div className="px-5 py-2 transition duration-300 text-white">
                        <Link to="/" className="flex  hover:text-red-700 dark:hover:text-white flex-row gap-2 items-center">
                            Home
                        </Link>
                    </div>
                    <div className="px-5 py-2 transition duration-300 text-white">
                        <Link to="/Product" className="flex  hover:text-red-700 dark:hover:text-white flex-row gap-2 items-center">
                            Product
                        </Link>
                    </div>

                    <div className="px-5 py-2 transition duration-300 text-white">
                        <Link className="flex flex-row  hover:text-red-700 dark:hover:text-white gap-2 items-center"
                            to="/about">
                            About
                        </Link></div>

                    <div className="px-5 py-2 transition duration-300 text-white">
                        <Link className="flex flex-row  hover:text-red-700 dark:hover:text-white gap-2 items-center"
                            to="/contact">
                            Contact us
                        </Link></div>
                    <div className="px-5 py-2 transition duration-300 text-white">
                        <div className=" flex-row  gap-4 flex items-center ">
                            <button className='px-4 py-2 bg-gray-50 text-gray-950 hover:bg-red-700 hover:border-transparent hover:text-gray-50 dark:bg-red-700 dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50    transition ease-in-out  delay-150 duration-300  rounded-lg'>Book Now</button>


                            <DarkSwitcher />
                        </div>
                    </div>

                </div>
            </div>
            <div>

            </div>
        </header>
    )
}
