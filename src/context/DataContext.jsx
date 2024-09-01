import { createContext, useState } from "react"

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [currentPath, setCurrentPath] = useState(['home'])
    const [directories, setDirectories] = useState([])
    const [files, setFiles] = useState([])
    const [currentDirectoryId, setCurrentDirectoryId] = useState('home')

    return (
        <DataContext.Provider

            value={{
                currentPath,
                setCurrentPath,
                directories,
                setDirectories,
                files, 
                setFiles,
                currentDirectoryId,
                setCurrentDirectoryId,
            }}

        >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext