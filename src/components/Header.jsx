import React from 'react'
import { Link } from 'react-scroll'
function Header() {
    return (
        <div>
            <nav className='flex justify-between items-center h-16 text-white font-bold px-4 max-md:hidden'>
                <span href="/" className='font-bold text-xl text-[#725ced] cursor-pointer underline'>Abhishek Verma</span>
                <ul className='flex justify-end items-center space-x-10 text-xl'>
                    <li><Link><button className="cursor-pointer relative items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#725ced] opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out">Home</span>
                        <span className="absolute inset-0 border-2 border-white/40 rounded-full"></span>
                    </button></Link></li>
                    <li><Link to="About" smooth={true} duration={500}><button className="cursor-pointer relative items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#725ced] opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out">About</span>
                        <span className="absolute inset-0 border-2 border-white/40 rounded-full"></span>
                    </button></Link></li>
                    <li><Link to="Contact" smooth={true} duration={500}><button className="cursor-pointer relative items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#725ced] opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out">Contact</span>
                        <span className="absolute inset-0 border-2 border-white/40 rounded-full"></span>
                    </button></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
