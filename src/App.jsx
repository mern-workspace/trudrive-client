import React from 'react'
import HeroComponent from './components/HeroComponent/HeroComponent'
import { ModalProvider } from './context/ModalContext'
import { DataProvider } from './context/DataContext'

const App = () => {
    return (
        <DataProvider>
            <ModalProvider>
                <div className="flex">
                    <HeroComponent />
                </div>
            </ModalProvider>
        </DataProvider>
    )
}

export default App