import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaCaretDown } from 'react-icons/fa'
import { MdFilterList } from "react-icons/md"

const HeaderComponent = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [typeDropdownOpen, setTypeDropdownOpen] = useState(false)
    const [peopleDropdownOpen, setPeopleDropdownOpen] = useState(false)
    const [modifiedDropdownOpen, setModifiedDropdownOpen] = useState(false)
    const typeDropdownRef = useRef(null)
    const peopleDropdownRef = useRef(null)
    const modifiedDropdownRef = useRef(null)

    const handleSearch = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleClickOutside = (event) => {
        if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
            setTypeDropdownOpen(false)
        }
        if (peopleDropdownRef.current && !peopleDropdownRef.current.contains(event.target)) {
            setPeopleDropdownOpen(false)
        }
        if (modifiedDropdownRef.current && !modifiedDropdownRef.current.contains(event.target)) {
            setModifiedDropdownOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        window.addEventListener('scroll', () => {
            setTypeDropdownOpen(false)
            setPeopleDropdownOpen(false)
            setModifiedDropdownOpen(false)
        })

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            window.removeEventListener('scroll', () => {
                setTypeDropdownOpen(false)
                setPeopleDropdownOpen(false)
                setModifiedDropdownOpen(false)
            })
        }
    }, [])

    return (
        <div className="my-4 py-2 sticky top-0 left-0 bg-white">
            <div className="relative pl-1 2xl:max-w-[60%] xl:max-w-[60%] lg:max-w-[70%] md:max-w-[80%] sm:max-w-[80%]">
                <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full px-3 py-3 pl-14 rounded-full bg-[#e9eef6] focus:border-blue-500 focus:outline-none"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <div 
                    className="absolute left-2.5 top-1 text-2xl p-2 rounded-full cursor-pointer hover:bg-[#c4c5c8]"
                    onClick={() => handleSearch}
                >
                    <AiOutlineSearch />
                </div>
                <div className="absolute right-1.5 top-1 text-2xl p-2 rounded-full cursor-pointer hover:bg-[#c4c5c8]">
                    <MdFilterList />
                </div>
            </div>

            <div className="pl-2">
                <h1 className="text-2xl px-4 py-6">
                    Home
                </h1>
            </div>

            <div className="flex space-x-3 pl-4">
                <div className="relative" ref={typeDropdownRef}>
                    <button 
                        className="flex items-center px-4 py-1 rounded-lg border border-black bg-white hover:bg-[#e7e8eb]"
                        onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
                    >
                        <p>Type</p>
                        <span className="ml-2"><FaCaretDown /></span>
                    </button>
                    {typeDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative" ref={peopleDropdownRef}>
                    <button 
                        className="flex items-center px-4 py-1 rounded-lg border border-black bg-white hover:bg-[#e7e8eb]"
                        onClick={() => setPeopleDropdownOpen(!peopleDropdownOpen)}
                    >
                        <p>People</p>
                        <span className="ml-2"><FaCaretDown /></span>
                    </button>
                    {peopleDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative" ref={modifiedDropdownRef}>
                    <button 
                        className="flex items-center px-4 py-1 rounded-lg border border-black bg-white hover:bg-[#e7e8eb]"
                        onClick={() => setModifiedDropdownOpen(!modifiedDropdownOpen)}
                    >
                        <p>Modified</p>
                        <span className="ml-2"><FaCaretDown /></span>
                    </button>
                    {modifiedDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
