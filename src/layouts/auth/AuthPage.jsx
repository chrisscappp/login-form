import React from 'react'
import EnterModal from '../../components/enterModal/EnterModal'

const AuthPage = ({props}) => {
    return (
        <>
            <div className = "authPage">
                <div className = "authPage-container">
                    <EnterModal props = {props}/>
                </div>
            </div>
        </>
    )
}

export default React.memo(AuthPage)