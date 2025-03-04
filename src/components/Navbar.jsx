import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";
import Profile from "./Profile";

function Navbar() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCoursesDropdownOpen, setIsCourseseDropdownOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img className="w-16 h-16 text-white p-2 rounded-full" src={Logo} alt="logo" />
                    <span className="ml-3 text-xl font-mono font-bold text-lg">
                        Learni<span className="text-cyan-600">Verse</span>
                    </span>
                </Link>

                {/* User and Hamburger */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse md:order-2">
                    {/* Login and Signup Buttons */}
                    {!loggedInUser ? (
                        <div className="hidden md:flex space-x-2">
                            <button className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    <Link to="/login">Login</Link>
                                </span>
                            </button>
                            <button className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    <Link to="/signup">Sign Up</Link>
                                </span>
                            </button>
                        </div>
                    ) : (
                        <Profile />
                    )}

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-600 md:p-0"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="relative text-center">
                                <button
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 md:w-auto"
                                    onClick={() => setIsCourseseDropdownOpen(!isCoursesDropdownOpen)}
                                >
                                    Courses
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {isCoursesDropdownOpen && (
                                    <div className="absolute right-0 z-50 mt-2 w-48 bg-white rounded-lg shadow-lg">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li>
                                                <Link
                                                    to="/webDev"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-600 hover:text-white rounded-sm"
                                                >
                                                    Web Development
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/appDev"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-600 hover:text-white rounded-sm"
                                                >
                                                    App Development
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/cloudComp"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-600 hover:text-white rounded-sm"
                                                >
                                                    Cloud Computing
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li>
                            <Link
                                to="/resources"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-600 md:p-0"
                            >
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/quiz"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-600 md:p-0"
                            >
                                Quiz
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-600 md:p-0"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-600 md:p-0"
                            >
                                Contact
                            </Link>
                        </li>

                        {/* Buttons in Hamburger */}
                        {!loggedInUser && (
                            <li className="flex flex-col space-y-2 md:hidden">
                                <button className="relative inline-flex items-center justify-center p-0.5 text-xlg font-medium text-gray-900 rounded-lg border-2 border-cyan-600 hover:bg-cyan-600 focus:outline-none hover:text-white">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75">
                                        <Link to="/login">Login</Link>
                                    </span>
                                </button>
                                <button className="relative inline-flex items-center justify-center p-0.5 text-xlg font-medium text-gray-900 rounded-lg border-2 border-cyan-600 hover:bg-cyan-600 focus:outline-none hover:text-white">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75">
                                        <Link to="/signup">Sign Up</Link>
                                    </span>
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
