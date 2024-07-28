import React from 'react'

import { FaFolder } from "react-icons/fa6"
import { BsThreeDotsVertical } from "react-icons/bs"

const DirectoryComponent = ({ directory }) => {

    const handleDirectoryOpen = () => {

    }

    return (
        <div 
            className="flex justify-between items-center bg-[#f0f4f9] px-4 py-2 w-full rounded-lg hover:bg-[#e7e8eb] transition-all ease-in cursor-pointer"
                onClick={handleDirectoryOpen}
        >
            <div className="flex justify-start items-center">
                <span className="text-xl"><FaFolder /></span>

                <p className="ml-4 capitalize text-gray-950">{directory.name}</p>  
            </div>

            <div className="p-2 rounded-full cursor-pointer hover:bg-[#c4c5c8]">
                <span><BsThreeDotsVertical /></span>
            </div>

        </div>
    )
}

export default DirectoryComponent