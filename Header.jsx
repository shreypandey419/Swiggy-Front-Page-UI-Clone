import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { BiHelpCircle } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';


export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <IoIosSearch/>,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sup: "New "
        },
        {
            icon: <BiHelpCircle />,
            name:"Help"
        },
        {
            icon: <FaRegUser />,
            name:"Sign in"
        },
        {
            icon: <HiOutlineShoppingCart />,
            name:"Cart",
            sup:"(2)"
        }
    ]
    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500 ' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",
                zIndex:999999999999
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='p-[250px] bg-white h-full absolute duration-[400ms]'
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}
                ></div>
            </div>
            <header className='p-[15px] shadow-x1 text-[#3d4152] sticky top-0 bg-white z-[9999]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[100px]'>
                        <img src="images/logo.png" className='w-full' alt="" />
                    </div>
                    <div className='ml-4 flex items-center'>
                        <span className='font-bold border-b-[3px] border-[black] mr-2'>Ghaziabad</span>
                        <span className='mr-2'>Charm Castle, Raj Nagar Extension</span>
                        <RxCaretDown 
                        fontSize={25}
                        className='inline text-[#ff5200] cursor-pointer'
                        onClick={showSideMenu}/>
                    </div>
                    <nav className='hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold'>
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer'>
                                    {link.icon}
                                    {link.name}
                                    {link.sup && (
                                        <sup className='text-[#ff5200]'>{link.sup}</sup>
)}
                            </li>
                            ))}
                    </nav>
                </div>
            </header>

        </>
    )
}