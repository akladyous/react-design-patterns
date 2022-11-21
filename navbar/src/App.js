import { useEffect, useRef } from 'react';
import logo from './assets/react.svg';
// import './App.css';

function App() {
    const navbarMenuRef = useRef(null)
    function toggleMenu(elementRef) {
        elementRef.current.classList.toggle('hidden')
    }

    return (
        <header className='h-14 bg-whte'>
            <nav className='relative px-4 py-4 flex justify-between items-center h-full'>
                <div className='flex items-center space-x-4'>
                    <div className='icon'>

                        <a className="text-3xl font-bold leading-none" href="#home">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="title">
                        <h1 className='text-lg font-light'>MyApp</h1>
                    </div>
                </div>
                <div className="md:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu.bind(null, navbarMenuRef)} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                {/* primary navbar */}
                <ul
                    className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto md:flex md:items-center md:w-auto md:space-x-6"
                >
                    <li>
                        <a className="text-sm text-gray-400 hover:text-gray-500" href="/">
                            Home
                        </a>
                    </li>

                    <li>
                        <a className="text-sm text-blue-600 font-bold" href="/">
                            About Us
                        </a>
                    </li>

                    <li>
                        <a className="text-sm text-gray-400 hover:text-gray-500" href="/">
                            Services
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-sm text-gray-400 hover:text-gray-500"
                            href="/"
                        >Pricing</a
                        >
                    </li>
                    <li>
                        <a
                            className="text-sm text-gray-400 hover:text-gray-500"
                            href="/"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" href="/">
                    Sign In
                </a>
                <a
                    className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                    href="/"
                >
                    Sign up
                </a>
            </nav>
            <div className="navbar-menu relative z-50 hidden" ref={navbarMenuRef} onClick={toggleMenu.bind(null, navbarMenuRef)}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav
                    className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
                >
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="/">
                            <img src="" alt="" />
                        </a>
                        <button className="navbar-close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                    href="/"
                                >Home</a
                                >
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                    href="/"
                                >About Us</a
                                >
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                    href="/"
                                >Services</a
                                >
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                    href="/"
                                >Pricing</a
                                >
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                    href="/"
                                >Contact</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a
                                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                                href="/"
                            >Sign in</a
                            >
                            <a
                                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                                href="/"
                            >Sign Up</a
                            >
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default App;
