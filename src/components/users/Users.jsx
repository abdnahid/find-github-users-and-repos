import React,{useContext} from 'react';
import UserItem from "./UserItem";
import Spinner from "../layout/spinner.jsx";
import GithubContext from '../context/github/GithubContext';


const Users = () => {
    const userData = useContext(GithubContext)
        if (userData.loading) {
            return <Spinner />
        } else {
            return (
                <div style={userStyle}>
                    {userData.users.map((user)=>
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
