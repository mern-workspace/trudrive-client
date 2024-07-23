import React, { useState } from 'react'
import logo from '/logo.png'
import { Link } from 'react-router-dom'
import { AiFillClockCircle, AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePeopleAlt, MdAccessTime, MdStarBorder, MdPeople, MdPeopleAlt, MdStar } from 'react-icons/md'
import { RiDeleteBin6Fill, RiDeleteBin6Line } from 'react-icons/ri'
import { IoMdCloud, IoMdCloudOutline } from 'react-icons/io'
import { FaClock, FaPlus } from 'react-icons/fa6'

const SidebarComponent = () => {
    const [activeIcon, setActiveIcon] = useState('home') 

    const handleSetActiveIcon = (icon) => {
        setActiveIcon(icon)
    }

    const linkClass = 'block h-8 py-2 px-4 rounded-full transition duration-300 flex items-center'
    const activeLinkClass = 'bg-[#c2e7ff]'
    const inactiveLinkClass = 'hover:bg-[#e7e8eb]'

    return (
            <div className="flex h-screen fixed">
                <div className="flex-shrink-0 w-60 bg-[#f8faff]">
                    <div 
                        className="flex items-center p-4 cursor-pointer"
                        onClick={() => location.href = '/'}
                    >
                        <img 
                            src={logo} 
                            alt=""
                            className="w-10 h-10" 
                        />
                        <h1 className="text-2xl ml-4 cursor-pointer">Drive</h1>
                    </div>

                    <div className="flex justify-start items-center py-4 px-4 ">
                        <button className="shadow-xl bg-white text-black py-2 px-6 flex items-center rounded-xl">
                            <span className="text-xl"><FaPlus /></span>
                            <span className="ml-2">New</span>
                        </button>
                    </div>

                    <ul className="px-4">
                        <li>
                            <Link 
                                to="/" 
                                className={`${linkClass} ${activeIcon === 'home' ? activeLinkClass : inactiveLinkClass}`}
                                onClick={() => handleSetActiveIcon('home')}
                            >
                                <span className="mr-2 text-xl">
                                    {activeIcon === 'home' ? <AiFillHome /> : <AiOutlineHome /> }
                                </span>
                                <span className="text-base">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/drive" 
                                className={`${linkClass} ${activeIcon === 'drive' ? activeLinkClass : inactiveLinkClass}`}
                                onClick={() => handleSetActiveIcon('drive')}
                            >
                                <span className="mr-2 text-xl"><IoMdCloudOutline /></span>
                                <span className="text-base">Drive</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="mt-4 px-4">
                        <li>
                            <Link 
                                to="/shared-with-me" 
                                className={`${linkClass} ${activeIcon === 'shared' ? activeLinkClass : inactiveLinkClass}`}
                                onClick={() => handleSetActiveIcon('shared')}
                            >
                                <span className="mr-2 text-xl">
                                    {activeIcon === 'shared' ? <MdPeopleAlt /> : <MdOutlinePeopleAlt /> }
                                </span>
                                <span className="text-base">Shared with me</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/recent" 
                                className={`${linkClass} ${activeIcon === 'recent' ? activeLinkClass : inactiveLinkClass}`}
                                onClick={() => handleSetActiveIcon('recent')}
                            >
                                <span className="mr-2 text-xl">
                                    {activeIcon === 'recent' ? <AiFillClockCircle /> : <MdAccessTime /> }
                                </span>
                                <span className="text-base">Recent</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/starred" 
                                className={`${linkClass} ${activeIcon === 'starred' ? activeLinkClass : inactiveLinkClass}`}
                                onClick={() => handleSetActiveIcon('starred')}
                            >
                                <span className="mr-2 text-xl">
                                    {activeIcon === 'starred' ? <MdStar /> : <MdStarBorder /> }
                                </span>
                                <span className="text-base">Starred</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="mt-4 px-4">
                        <li>
                            <Link 
                                to="/bin" 
                                className={`${linkClass} ${activeIcon === 'bin' ? activeLinkClass : inactiveLinkClass}`}
                                onClick={() => handleSetActiveIcon('bin')}
                            >
                                <span className="mr-2 text-xl">
                                    {activeIcon === 'bin' ? <RiDeleteBin6Fill /> : <RiDeleteBin6Line /> }
                                </span>
                                <span className="text-base">Bin</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/storage" 
                                className={`${linkClass} ${activeIcon === 'storage' ? activeLinkClass : inactiveLinkClass}`}
                                onClick={() => handleSetActiveIcon('storage')}
                            >
                                <span className="mr-2 text-xl">
                                    {activeIcon === 'storage' ? <IoMdCloud /> : <IoMdCloudOutline /> }
                                </span>
                                <span className="text-base">Storage</span>
                            </Link>
                        </li>
                        <li>
                            <div className="h-1 bg-navy-100 mt-4" style={{ width: '50' }}></div>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default SidebarComponent
