import React, { useState } from 'react'
import useModalContext from '../../hooks/useModalContext'
import axios from 'axios'

const ModalComponent = () => {

    const { isModalOpen, modalTitle, inputValue, setInputValue, inputPlaceholderValue, onModalSubmit, onCloseModal, successButtonValue, setIsModalOpen, setModalTitle, setInputPlaceholderValue, setOnCloseModal, setOnModalSubmit, setSuccessButtonValue } = useModalContext()


    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    if (!isModalOpen) {
        return null
    }

    const handleNewFolderSubmit = () => {
        console.log("sdfh")
        console.log(inputValue)
        
        axios
            .post(
                'http://localhost:3500/api/v1/folders/home', 
                {
                    directoryName: inputValue
                },
                {
                    withCredentials: true,
                }
            )
            .then((response) => {
                if (response.status === 201) {
                    location.reload()
                }
            })
            .catch((error) => {
                console.log(error.response)
            }) 
        handleCloseModal()
    }
    
    const handleCloseModal = () => {
        // reset the value for modal
        setIsModalOpen(false);
        setModalTitle('');
        setInputPlaceholderValue('');
        setSuccessButtonValue('');
        setOnModalSubmit(() => {});
        setOnCloseModal(() => {});
        setInputValue('');
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-semibold mb-4">{modalTitle}</h2>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={inputPlaceholderValue}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex justify-end px-6 py-4 rounded-b-lg">
                    <button
                        className="px-4 py-2 mr-2 bg-white text-blue-600  hover:bg-blue-50 rounded-full focus:outline-none"
                        onClick={onCloseModal}
                    >
                        Cancel
                    </button>
                    <button
                        className={`px-4 py-2 bg-white  text-blue-600 focus:outline-none ${!inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50 rounded-full'}`}
                        onClick={handleNewFolderSubmit}
                        disabled={!inputValue.trim()}
                    >
                        {successButtonValue}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent
