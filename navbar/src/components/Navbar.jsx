import React from "react";
import logo from "../assets/react.svg";

export default function Navbar() {
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
                <nav className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:mx-auto md:flex md:items-center md:w-auto md:space-x-6">
                    <a className="text-md font-semibold" href="/">
                        Home
                    </a>
                    <a className="text-md font-semibold" href="/">
                        About Us
                    </a>
                    <a className="text-md font-semibold" href="/">
                        Services
                    </a>
                    <a className="text-md font-semibold" href="/">
                        Pricing
                    </a>
                    <a className="text-md font-semibold" href="/">
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
            <nav className="bg-slate-300">
                <a
                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Home
                </a>
                <a
                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    About Us
                </a>
                <a
                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Services
                </a>
                <a
                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Pricing
                </a>
                <a
                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}
