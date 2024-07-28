import React, { useEffect, useRef, useState } from 'react'
import logo from '/logo.png'
import { Link } from 'react-router-dom'
import { AiFillClockCircle, AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePeopleAlt, MdAccessTime, MdStarBorder, MdPeople, MdPeopleAlt, MdStar } from 'react-icons/md'
import { RiDeleteBin6Fill, RiDeleteBin6Line } from 'react-icons/ri'
import { IoMdCloud, IoMdCloudOutline } from 'react-icons/io'
import { FaClock, FaPlus } from 'react-icons/fa6'
import { MdOutlineCreateNewFolder } from "react-icons/md"
import { MdOutlineUploadFile } from "react-icons/md"
import { MdOutlineDriveFolderUpload } from "react-icons/md"
import ModalComponent from '../ModalComponent/ModalComponent'
import axios from 'axios'

const SidebarComponent = () => {
    const [activeIcon, setActiveIcon] = useState('home')
    const [folderName, setFolderName] = useState('') 
    const [newDropdownOpen, setNewDropdownOpen] = useState(false)
    const [isOpen, setModalOpen] = useState(false)
    const newDropdownRef = useRef(null)


    const handleSetActiveIcon = (icon) => {
        setActiveIcon(icon)
    }

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    const handleNewFolderSubmit = () => {
        
        axios
            .post(
                'http://localhost:3500/api/v1/folders/home', 
                {
                    directoryName: folderName
                },
                {
                    withCredentials: true,
                }
            )
            .then((response) => {
                if (response.status === 201) {
                    location.reload()
                }
            })
            .catch((error) => {
                console.log(error.response)
            }) 
    }

    useEffect(() => {
        if(isOpen) {
            setNewDropdownOpen(false)
        }

        const handleClickOutside = (event) => {
            if (newDropdownRef.current && !newDropdownRef.current.contains(event.target)) {
                setNewDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [isOpen]);


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

                    <div className="flex justify-start items-center py-4 px-4 relative" ref={newDropdownRef}>
                        <button
                            className="shadow-xl bg-white text-black py-2 px-6 flex items-center rounded-xl"
                            onClick={() => setNewDropdownOpen(!newDropdownOpen)}
                        >
                            <span className="text-xl"><FaPlus /></span>
                            <span className="ml-2">New</span>
                        </button>
                        {newDropdownOpen && (
                            <div className={`absolute left-4 top-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all ease-out duration-200 ${newDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} z-auto`}>
                                <div className="py-1">
                                    <ul>
                                        <li>
                                            <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]" onClick={handleOpenModal}>
                                                <span className="text-xl mr-4"><MdOutlineCreateNewFolder /></span>
                                                <p>New Folder</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]">
                                                <span className="text-xl mr-4"><MdOutlineUploadFile /></span>
                                                <p>New File</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]">
                                                <span className="text-xl mr-4"><MdOutlineDriveFolderUpload /></span>
                                                <p>Upload Folder</p>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <ModalComponent 
                        isOpen={isOpen} 
                        onClose={handleCloseModal} 
                        onSubmit={handleNewFolderSubmit}
                        inputValue={folderName}
                        setInputValue={setFolderName}
                        title="New Folder" 
                        placeholder="United Folder" 
                        successButton="Create"
                    />

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
