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
                <div>
                    <button className="block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <nav>
                <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Home
                </a>
                <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    About Us
                </a>
                <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Services
                </a>
                <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Pricing
                </a>
                <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}
