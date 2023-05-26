import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold  text-primary">React.</h1>
            <ul className="hidden md:flex">
                <li className="p-4 hover:text-primary">Home</li>
                <li className="p-4 hover:text-primary">Company</li>
                <li className="p-4 hover:text-primary">Resources</li>
                <li className="p-4 hover:text-primary">About</li>
                <li className="p-4 hover:text-primary">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold m-4 text-primary">React.</h1>
                <ul className="p-4 uppercase">
                    <li className="p-4 border-b border-gray-600 hover:text-primary">Home</li>
                    <li className="p-4 border-b border-gray-600 hover:text-primary">Company</li>
                    <li className="p-4 border-b border-gray-600 hover:text-primary">Resources</li>
                    <li className="p-4 border-b border-gray-600 hover:text-primary">About</li>
                    <li className="p-4 hover:text-primary">Contact</li>
                </ul>
            </div>
        </div>  
    )
}

export default Navbar