import { useState } from "react"

export const useQuizForm = () => {

    const [username , setUsername] = useState('');
    const [category , setCategory] = useState('');
    const [email , setEmail] = useState('');


    const handleChngeName = (e) => {
        setUsername(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    return {
        username , category, email,
        handleChngeName, handleCategoryChange , handleChangeEmail
    }
}