import React from 'react';
import PropTypes from "prop-types";

const UserItem = (props)=> {
        const {id,avatar_url,login,html_url}= props.user;
        return (
            <div className="card text-center" key={id}>
                <img className="round-img" src={avatar_url} alt="avatar" style={{width:"60px"}}/>
                <h2>{login}</h2>
                <a className="btn btn-dark btn-sm my-1" href={html_url}>More</a>
            </div>
        )
    }
UserItem.prototype={
    user: PropTypes.object.isRequired,
}

export default UserItem
