import React from 'react'

const Alert = (props) => {
    return props.alertInfo !== null &&(<div className={`alert alert-${props.alertInfo.type}`}>
        <i class="fas fa-exclamation-circle"></i><span>{props.alertInfo.msg}</span>
    </div>)
}

export default Alert;
