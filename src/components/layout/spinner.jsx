import React,{Fragment} from 'react';
import Loader from "./spinner.gif";
const spinner = () => {
    return (
        <Fragment>
            <img src={Loader} alt="loading..." style={{width:"200px",margin:"auto",display:"block"}} />
        </Fragment>
    )
}

export default spinner;

