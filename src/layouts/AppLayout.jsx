import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import HomePage from './home/HomePage'
import AuthPage from './auth/AuthPage'
import RegPage from './registration/RegPage'
import LoginPage from './login/LoginPage'
import ErrorPage from './error/ErrorPage'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../redux/actions/usersAction/usersAction'

const AppLayout = () => {
    
    const dispatch = useDispatch()
    const {users, isError} = useSelector((({usersReducer}) => usersReducer))
    const {logUser} = useSelector((({loginReducer}) => loginReducer))
    const [usersArr, setUsersArr] = React.useState([])

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    console.log('loguser', logUser)

    const [name, setName] = React.useState('')
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [nameDirty, setNameDirty] = React.useState(false)
    const [loginDirty, setLoginDirty] = React.useState(false)
    const [passwordDirty, setPasswordDirty] = React.useState(false)
    const [authDirty, setAuthDirty] = React.useState(false)

    const [nameError, setNameError] = React.useState("Имя не может быть пустым")
    const [loginError, setLoginError] = React.useState("Логин не может быть пустым")
    const [passwordError, setPasswordError] = React.useState("Пароль не может быть пустым")

    const [formValid, setFormValid] = React.useState(false)

    const [showPassword, setShowPassword] = React.useState("Показать пароль")

    React.useEffect(() => {
        dispatch(getUsers())
    }, [])

    React.useEffect(() => {
        setUsersArr(users)
    }, [users])

    React.useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passwordError])

    const showPass = () => {
        if (props.password) {
            let input = document.getElementById('inputPassword')
            if (showPassword === "Показать пароль") {
                input.type = "text"
                setShowPassword("Скрыть пароль")
            } else {
                input.type = "password"
                setShowPassword("Показать пароль")
            }
        }
    }

    const blurHandler = (event) => {
        switch (event.target.name) {
            case "name" :
                setNameDirty(true)
                break
            case "login" :
                setLoginDirty(true)
                break
            case "password" :
                setPasswordDirty(true)
                break
        }
    }

    const nameHandler = (title) => {
        setName(title)
        if (title) {
            setNameError("")
        } else {
            setNameError("Имя не может быть пустым")
        }
    }

    const loginHandler = (title) => {
        setLogin(title)
        if (title) {
            setLoginError("")
        } else {
            setLoginError("Логин не может быть пустым")
        }
    }

    const passwordHandler = (title) => {
        setPassword(title)
        if (title) {
            setPasswordError("")
        } else {
            setPasswordError("Пароль не может быть пустым")
        }
    }

    const props = {
        goBack: goBack,
        loginDirty: loginDirty,
        loginError: loginError,
        passwordDirty: passwordDirty,
        passwordError: passwordError,
        nameDirty: nameDirty,
        nameError: nameError,
        blurHandler: blurHandler,
        loginHandler: loginHandler,
        passwordHandler: passwordHandler,
        nameHandler: nameHandler,
        formValid: formValid,
        name: name,
        login: login,
        password: password,
        setAuthDirty: setAuthDirty,
        authError: authDirty ? "Неверный логин или пароль" : "",
        showPassword: showPassword,
        showPass: showPass,
        usersArr: usersArr,
        setUsersArr: setUsersArr,
    }

    return (
        <>
            {
                isError
            ?
                <h3>Что-то пошло не так...</h3>
            :
                <Routes>
                    <Route path = "/" element = {<HomePage/>} />
                    <Route path = "auth" element = {
                        <AuthPage 
                            props = {props}
                        />
                    } 
                    />
                    <Route path = "reg" element = {
                        <RegPage 
                            props = {props}
                        />
                    } 
                    />
                    <Route path = "profile" element = {
                        <LoginPage/>
                    } 
                    />
                    <Route path = "*" element = {<ErrorPage/>} />
                </Routes>
            }
        </>
    )
}

export default AppLayout