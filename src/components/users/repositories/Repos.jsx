import React from 'react';
import Repo from './Repo';

function Repos(props) {
    const {repos,login}=props;
    return (
        <div>
            {repos.map((value)=> <Repo repo={value} key={value.id} login={login}/>)}
        </div>
    )
}

export default Repos