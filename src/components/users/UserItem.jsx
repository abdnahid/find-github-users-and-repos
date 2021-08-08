import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const UserItem = (props)=> {
        const {id,avatar_url,login}= props.user;
        return (
            <div className="card text-center" key={id}>
                <img className="round-img" src={avatar_url} alt="avatar" style={{width:"60px"}}/>
                <h2>{login}</h2>
                <Link className="btn btn-dark btn-sm my-1" to={`/users/${login}`}>More</Link>
            </div>
        )
    }
UserItem.prototype={
    user: PropTypes.object.isRequired,
}

export default UserItem 