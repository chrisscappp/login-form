import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')))

    const logOut = () => {
        setUser(localStorage.removeItem('user'))
    }

    return (
        <>
            {
                user
            ?
                <>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.login}</div>
                    <button onClick = {logOut}>
                        выйти
                    </button>
                </>
            :
                <>
                    <div>пользователь не в ресурсе :(</div>
                </>
            }
            <NavLink to = "/" className="inactive" activeclassname="active">
                <button>на главную</button>
            </NavLink>
        </>
    )
}

export default React.memo(LoginPage)