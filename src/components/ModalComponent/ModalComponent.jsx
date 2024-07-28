import React, { useState } from 'react'

const ModalComponent = ({ isOpen, onClose, onSubmit, inputValue, setInputValue, title, placeholder, successButton }) => {

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleCancel = () => {
        setInputValue('')
        onClose()
    }

    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-semibold mb-4">{title}</h2>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex justify-end px-6 py-4 rounded-b-lg">
                    <button
                        className="px-4 py-2 mr-2 bg-white text-blue-600  hover:bg-blue-50 rounded-full focus:outline-none"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className={`px-4 py-2 bg-white  text-blue-600 focus:outline-none ${!inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50 rounded-full'}`}
                        onClick={onSubmit}
                        disabled={!inputValue.trim()}
                    >
                        {successButton}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent
