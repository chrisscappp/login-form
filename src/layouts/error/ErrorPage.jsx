import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <>
            <div onClick = {goBack}>Страницы с таким адресом не существует...</div>
        </>
    )
}

export default ErrorPage