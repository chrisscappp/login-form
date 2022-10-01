import React from 'react'
import { NavLink } from 'react-router-dom'

const RegButton = () => {
    return (
        <>
            <NavLink to = "/reg" className="inactive" activeclassname="active">
                <button className = "homePage-container__buttons-reg">
                    Регистрация
                </button>
            </NavLink>
        </>
    )
}

export default React.memo(RegButton)