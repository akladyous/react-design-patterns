import { useState, useEffect } from "react";
import logo from "../assets/react.svg";

export default function MyNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {

    }, [])
    return (
        <header className="h-14 ">
            <div className="relative flex justify-between items-center p-3 h-full">
                <div className="flex items-center space-x-2">
                    <div className="">
                        <img className="h-full w-full" src={logo} alt="logo" />
                    </div>
                    <div>
                        <h3>MyApp</h3>
                    </div>
                </div>
                {/* ----------  */}
                <nav className="hidden md:absolute md:flex md:items-center md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2 md:mx-auto md:w-auto md:space-x-6">
                    <a className="text-md font-semibold my-2" href="/">
                        Home
                    </a>
                    <a className="text-md font-semibold my-2" href="/">
                        About Us
                    </a>
                    <a className="text-md font-semibold my-2" href="/">
                        Services
                    </a>
                    <a className="text-md font-semibold my-2" href="/">
                        Pricing
                    </a>
                    <a className="text-md font-semibold my-2" href="/">
                        Contact
                    </a>
                </nav>
                {/* ----------  */}
                <div>
                    <button className="block">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            {/* <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> */}
                        </svg>
                    </button>
                </div>
            </div>
            <nav className="hidden bg-red-100 pl-4 sm:flex sm:flex-col z-50">
                <a
                    className="block py-3 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Home
                </a>
                <a
                    className="block py-3 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    About Us
                </a>
                <a
                    className="block py-3 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Services
                </a>
                <a
                    className="block py-3 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Pricing
                </a>
                <a
                    className="block py-3 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Contact
                </a>
            </nav >
        </header >
    );
}
