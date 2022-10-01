import React from 'react'
import RegModal from '../../components/regModal/RegModal'

const RegPage = ({props}) => {
    return (
        <>
            <div className = "regPage">
                <div className = "regPage-container">
                    <RegModal props = {props}/>  
                </div>
            </div>
        </>
    )
}

export default React.memo(RegPage)