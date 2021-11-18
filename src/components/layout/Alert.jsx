import React,{useContext} from 'react'
import GithubContext from '../context/github/GithubContext';

const Alert = () => {
    const githubContext=useContext(GithubContext);
    return githubContext.alert !== null &&(<div className={`alert alert-${githubContext.alert.type}`}>
        <i className="fas fa-exclamation-circle"></i><span>{githubContext.alert.msg}</span>
    </div>)
}

export default Alert;
