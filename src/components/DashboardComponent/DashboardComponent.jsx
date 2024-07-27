import React from 'react'

import files from '../../data/file'
import FileComponent from '../FileComponent/FileComponent'

const DashboardComponent = () => {

    console.log(files)
    return (
        <div className="container mx-auto px-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 transition-all duration-300 ease-in-out">
                
                {files.map( file => (
                    <FileComponent file={file} />
                ))}
            </div>
        </div>
    )
}

export default DashboardComponent

