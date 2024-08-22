import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FileComponent from '../../components/FileComponent/FileComponent'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'
import DirectoryComponent from '../../components/DirectoryComponent/DirectoryComponent'

const DashboardComponent = () => {
    const [directories, setDirectories] = useState([])
    const [files, setFiles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        authenticateUser()
    }, [])

    const authenticateUser = () => {
        axios
            .get('http://localhost:3500/api/v1/user/authenticate', {
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 200) {
                    fetchData()
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    location.href = '/login'
                }
            })
    }

    const fetchData = () => {
        axios
            .get('http://localhost:3500/api/v1/folders/home', {
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
                if (error.response.status === 401) {
                    
                }
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="container mx-auto px-4">
            {isLoading ? (
                <div className="text-center mt-10">
                    <LoadingComponent />
                </div>
            ) : (
                <React.Fragment>
                    {directories && directories.length > 0 && (
                        <React.Fragment>
                            <div className="mt-6">
                                <h4 className='text-md'>Folders</h4>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 transition-all duration-300 ease-in-out mt-5">
                            {directories.map((directory) => (
                                <DirectoryComponent key={directory._id} directory={directory} />
                            ))}
                        </div>
                        </React.Fragment>
                    )}
                    {files && files.length > 0 ? (
                        <React.Fragment>
                            <div className="mt-8">
                                <h4 className='text-md'>Files</h4>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 transition-all duration-300 ease-in-out mt-5">
                                {files.map((file) => (
                                    <FileComponent key={file._id} file={file} />
                                ))}
                            </div>
                        </React.Fragment>
                        
                    ) : (
                        !directories && (
                            <div className="text-center mt-10">
                                <p>No files found. Create one!</p>
                            </div>
                        )
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default DashboardComponent
