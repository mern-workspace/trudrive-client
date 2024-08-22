import React from 'react'
import HeroComponent from './components/HeroComponent/HeroComponent'
import { ModalProvider } from './context/ModalContext'

const App = () => {
    return (
        <ModalProvider>
            <div className="flex">
                <HeroComponent />
            </div>
        </ModalProvider>
    )
}

export default App