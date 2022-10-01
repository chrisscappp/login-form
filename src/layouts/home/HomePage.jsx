import React from 'react'
import AuthButton from '../../components/authButton/AuthButton'
import RegButton from '../../components/regButton/RegButton'
import { NavLink } from 'react-router-dom'

const HomePage = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <>
            <div className = "homePage">
                <div className = "homePage-container">
                    <div className = "homePage-container__buttons">
                        {
                            user
                        ?
                            <>
                                <NavLink to = "/profile" className="inactive" activeclassname="active">
                                    <button>профиль</button>
                                </NavLink>
                            </>
                        :
                            <AuthButton/>
                        }
                        <RegButton/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(HomePage)