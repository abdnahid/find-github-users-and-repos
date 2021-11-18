import React from "react";
import Users from "../users/Users";
import Search from "../users/Search";
import Alert from "../layout/Alert";

const Home = () => {
    return (
        <div className="container">
            <Alert />
            <Search />
            <Users />
        </div>
    )
}

export default Home;