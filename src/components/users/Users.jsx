import React from 'react';
import UserItem from "./UserItem";
import Spinner from "../layout/spinner.jsx";


const Users = (props) => {
        if (props.loading) {
            return <Spinner />
        } else {
            return (
                <div style={userStyle}>
                    {props.userList.map((user)=>
                    <UserItem key={user.id} user={user}/>
                    )}
                </div>
            )
        }
        
    }
const userStyle={
    display:"grid",
    gridTemplateColumns:"repeat(3, 1fr)",
    gridGap:"1rem"
}

export default Users
