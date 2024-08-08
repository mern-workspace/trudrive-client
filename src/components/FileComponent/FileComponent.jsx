import React from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

import docIcon from '/img/sheet-icon.jpeg'
import docPreview from '/img/preview1.png'
import profile from '/img/profile.png'

const FileComponent = ({ file }) => {

    const handleFileOpen = () => {
        
    }

    return (
        <div 
            className="bg-[#f0f4f9] p-4 w-full rounded-lg hover:bg-[#e7e8eb] transition-all ease-in cursor-pointer"
            onClick={handleFileOpen}
        >
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center w-full">
                    <img 
                        src={docIcon} 
                        alt="Document Icon" 
                        className="w-4 h-4" 
                    />

                    <h5 className="px-4 w-full overflow-hidden whitespace-nowrap text-ellipsis">{file.originalname}</h5>
                
                    <div className="p-2 rounded-full cursor-pointer hover:bg-[#c4c5c8]">
                        <span><HiOutlineDotsVertical /></span>
                    </div>
                </div>
            </div>

            <img 
                src={docPreview} 
                alt="Document Preview" 
                className="w-full mt-2 rounded-md" 
            />

            <div className="mt-4 flex items-center space-x-2">
                <img 
                    src={profile} 
                    alt="Profile" 
                    className="w-5 h-5 rounded-full" 
                />
                <p className="text-sm text-grey-100">{file.author}</p>
                <p className="text-sm text-grey-100">edited . {file.lastEdit}</p>
            </div>
        </div>
    )
}

export default FileComponent
