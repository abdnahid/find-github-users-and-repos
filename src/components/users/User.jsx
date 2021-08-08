import React, { useEffect } from 'react';
import Repos from "./repositories/Repos";
import Spinner from '../layout/spinner';

const User =({userFunction,userInfo,loading,userRepos,match})=> {

    useEffect(() => {
        userFunction(match.params.username);
        // eslint-disable-next-line
    }, [])

        const {
            name,
            avatar_url,
            location,
            company,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }=userInfo;
        if (loading) {
            return <Spinner />
        }
        return (
            <div className="container">
                <div className="card grid-2">
                    <div className="text-center">
                        <img src={avatar_url} alt="avatar" style={{width:"100px",borderRadius:"50%"}}/>
                        <h2>{name}</h2>
                        <p>Location: {location}</p>
                        <p>Hireable: {hireable? <i class="fas fa-check" style={{color:"green"}}></i> : <i class="fas fa-ban" style={{color:"red"}}></i>}</p>
                    </div>
                    <div>
                        <div>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </div>
                        <div className="my-2">
                            <a href={html_url} className="btn btn-light text-center" target="_blank" rel="noreferrer">Visit Github Profile</a>
                            <ul className="my-2">
                                <li><strong>Username: </strong>{login}</li>
                                <li><strong>Company: </strong>{company}</li>
                                <li><strong>Website: </strong>{blog}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Following: {following}</div>
                    <div className="badge badge-light">Followers: {followers}</div>
                    <div className="badge badge-success">Public repository: {public_repos}</div>
                    <div className="badge badge-white">Public Gist: {public_gists}</div>
                </div>
                <div className="card">
                    <Repos repos={userRepos} login={login} />
                </div>
            </div>
        )
}

export default User

