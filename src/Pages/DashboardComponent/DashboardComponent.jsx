import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import FileComponent from '../../components/FileComponent/FileComponent'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'
import DirectoryComponent from '../../components/DirectoryComponent/DirectoryComponent'
import useDataContext from '../../hooks/useDataContext'

const DashboardComponent = () => {
    const { directoryId } = useParams() 
    
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const {directories, setDirectories, files, setFiles, currentDirectoryId, setCurrentDirectoryId} = useDataContext()

    useEffect(() => {
        if (directoryId) {
            setCurrentDirectoryId(directoryId)
            fetchData(directoryId)
        }
        console.log(directoryId)
    }, [directoryId])

    const fetchData = (dirId) => {
        axios.get(`http://localhost:3500/api/v1/folders/${dirId}`, {
            withCredentials: true,
        })
        .then(response => {
            if (response.status === 200) {
                setFiles(response.data.files)
                setDirectories(response.data.directories)
            }
        })
        .catch(error => {
            if (error.response.status === 401) {
                navigate('/login')
            }
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const handleDirectoryClick = (dirId) => {
        navigate(`/folders/${dirId}`)
    }

    return (
        <div className="container mx-auto px-4">
            {isLoading ? (
                <div className="text-center mt-10">
                    <LoadingComponent />
                </div>
            ) : (
                <>
                    {directories.length > 0 && (
                        <>
                            <div className="mt-6">
                                <h4 className="text-md">Folders</h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 transition-all duration-300 ease-in-out mt-5">
                                {directories.map((directory) => (
                                    <DirectoryComponent 
                                        key={directory._id} 
                                        directory={directory} 
                                        onClick={() => handleDirectoryClick(directory._id)} 
                                    />
                                ))}
                            </div>
                        </>
                    )}
                    {files.length > 0 ? (
                        <>
                            <div className="mt-8">
                                <h4 className="text-md">Files</h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 transition-all duration-300 ease-in-out mt-5">
                                {files.map((file) => (
                                    <FileComponent key={file._id} file={file} />
                                ))}
                            </div>
                        </>
                    ) : (
                        directories.length === 0 && (
                            <div className="text-center mt-10">
                                <p>No files found. Create one!</p>
                            </div>
                        )
                    )}
                </>
            )}
        </div>
    )
}

export default DashboardComponent