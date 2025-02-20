import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="http://idbazaar.in/wp-content/uploads/2021/02/cropped-revised-id-bazaar-logo-3-1.jpg"
                            className="mr-3 h-24"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        
                        <Link
                            to="#"
                            className="text-white bg-blue-900 hover:shadow-2xl focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-900" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-900" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-900" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-900" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0`
                                    }
                                >
                                    Testimonials
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/user"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-900" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

