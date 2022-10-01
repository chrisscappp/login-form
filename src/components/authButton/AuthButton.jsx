import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthButton = () => {

    return (
        <>
            <NavLink to = "/auth" className="inactive" activeclassname="active">
                <button className = "homePage-container__buttons-auth">
                    Войти
                </button>            
            </NavLink>
        </>
    )
}

export default React.memo(AuthButton)