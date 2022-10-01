import React from 'react'
import { addUserAction } from '../../redux/actions/usersAction/usersAction'
import { sendData } from '../../api/sendData/sendData'
import { useNavigate } from 'react-router-dom'
import './style.css'

const RegModal = ({props}) => {

    const navigate = useNavigate()

    const regNewUser = (event) => {
        event.preventDefault()
        let data = {
            name: props.name,
            login: props.login,
            password: props.password,
            authCompleted: false
        }
        let findUser = {}
        findUser = props.usersArr.find(item => {
            return (item.login === props.login)
        })
        if (findUser) {
            alert(`Пользователь с логином ${props.login} уже существует`)
        } else {
            addUserAction(data)
            sendData(data)
            props.setUsersArr([...props.usersArr, data])
            alert("Пользователь успешно зарегестрирован!")
            navigate("/")
        }
    }

    return (
        <>
            <div className = "reg-form__wrapper">
                <span onClick = {props.goBack}>
                    <div className = "arrow-left__wrapper">
                        <div className = "arrow-left"></div>
                    </div>
                </span>
                <form className = "reg-form__container">
                    <div className = "form-title__container">
                        <h3 className = "form-title__container-text">Регистрация</h3>
                    </div>
                    <div className = "input-container">
                        {<div className = "input-error__text">{props.authError}</div>} 
                        <div className="form-group">
                            {(props.nameDirty && props.nameError) && <div className = "input-error__text">{props.nameError}</div>}
                            <input 
                                onChange = {(event) => props.nameHandler(event.target.value)}
                                onBlur = {event => props.blurHandler(event)}
                                placeholder = "Имя..." 
                                name = "name"
                                type = "name" 
                                className="form-control input-reg-form" 
                                id="inputName"></input>
                        </div>
                        <div className="form-group">
                            {(props.loginDirty && props.loginError) && <div className = "input-error__text">{props.loginError}</div>}
                            <input 
                                onChange = {(event) => props.loginHandler(event.target.value)}
                                onBlur = {event => props.blurHandler(event)}
                                placeholder = "Логин..." 
                                name = "login"
                                type = "login" 
                                className="form-control input-reg-form" 
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
                                className="form-control input-reg-form input-password" 
                                id = "inputPassword"></input>
                        </div>
                    </div>
                    <div className = "reg-modal-footer">
                        <button disabled = {!props.formValid} type="submit" className="btn btn-primary reg-btn" onClick = {(event) => regNewUser(event)}>
                            <p className = "reg-btn__text">Зарегестрировать</p>
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

export default React.memo(RegModal)