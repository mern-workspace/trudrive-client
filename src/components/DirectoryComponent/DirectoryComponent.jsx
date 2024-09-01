import React from 'react'

import { FaFolder } from "react-icons/fa6"
import { BsThreeDotsVertical } from "react-icons/bs"
import axios from 'axios'
import useDataContext from '../../hooks/useDataContext'
import { useNavigate } from 'react-router-dom'

const DirectoryComponent = ({ directory }) => {

    const { setDirectories, setFiles, setCurrentDirectoryId} = useDataContext()

    const navigate = useNavigate()

    const handleDirectoryOpen = () => {
        console.log(directory.urlId)
        axios
            .get(`http://localhost:3500/api/v1/folders/${directory.urlId}`, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    setFiles(response.data.files)
                    setDirectories(response.data.directories) 
                }
            })
            .catch((error) => {
                // if (error.response.status === 401) {
                    
                // }
                console.log(error)
            })
            .finally(() => {
                setCurrentDirectoryId(directory.urlId)
                navigate(`/folders/${directory.urlId}`)
            })
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