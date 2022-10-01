import React from 'react'
import { putData } from '../../api/putData/putData'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { loginUserAction } from '../../redux/actions/loginAction/loginAction'
import './style.css'

const EnterModal = ({props}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const setAuthUser = (event) => {
        event.preventDefault()
        let findUser = {}
        findUser = props.usersArr.find(item => {
            return (item.login === props.login && item.password === props.password)
        })
        if (findUser) {
            findUser.authCompleted = true
            putData(findUser)
            dispatch(loginUserAction(findUser))
            props.setAuthDirty(false)
            localStorage.setItem('user', JSON.stringify(findUser))
            navigate("/profile")
        } else {
            props.setAuthDirty(true)
        }
    }

    return (
        <>
            <div className = "enter-form__wrapper">
                <span onClick = {props.goBack}>
                    <div className = "arrow-left__wrapper">
                        <div className = "arrow-left"></div>
                    </div>
                </span>
                <form className = "enter-form__container">
                    <div className = "form-title__container">
                        <h3 className = "form-title__container-text">Вход</h3>
                    </div>
                    <div className = "input-container">
                        {<div className = "input-error__text">{props.authError}</div>} 
                        <div className="form-group">
                            {(props.loginDirty && props.loginError) && <div className = "input-error__text">{props.loginError}</div>}
                            <input 
                                onChange = {(event) => props.loginHandler(event.target.value)}
                                onBlur = {event => props.blurHandler(event)}
                                placeholder = "Логин..." 
                                name = "login"
                                type = "login" 
                                className="form-control input-enter-form" 
                                id="inputLogin"></input>
                        </div>
                        <div className="form-group">
                            {(props.passwordDirty && props.passwordError) && <div className = "input-error__text">{props.passwordError}</div>}
                            <input 
                                onChange = {(event) => props.passwordHandler(event.target.value)}
                                onBlur = {event => props.blurHandler(event)}
                                placeholder = "Пароль..." 
                                name = "password"
                                type = "password" 
                                className="form-control input-enter-form input-password" 
                                id = "inputPassword"></input>
                        </div>
                    </div>
                    <div className = "enter-modal-footer">
                        <button disabled = {!props.formValid} type="submit" className="btn btn-primary enter-btn" onClick = {(event) => setAuthUser(event)}>
                            <p className = "enter-btn__text">Войти</p>
                        </button>
                        <p className = "footer__show-pass" onClick = {props.showPass}>
                            {props.showPassword}
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default React.memo(EnterModal)