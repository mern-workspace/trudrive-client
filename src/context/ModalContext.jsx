import { createContext, useState } from "react"

const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {

    const [modalTitle, setModalTitle] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [inputPlaceholderValue, setInputPlaceholderValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [onModalSubmit, setOnModalSubmit] = useState(() => () => {})
    const [onCloseModal, setOnCloseModal] = useState(() => () => {})
    const [successButtonValue, setSuccessButtonValue] = useState('')

    return (
        <ModalContext.Provider

            value={{
                modalTitle,
                setModalTitle,
                inputValue,
                setInputValue,
                inputPlaceholderValue,
                setInputPlaceholderValue,
                isModalOpen,
                setIsModalOpen,
                onModalSubmit,
                setOnModalSubmit,
                onCloseModal,
                setOnCloseModal,
                successButtonValue,
                setSuccessButtonValue
            }}

        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext