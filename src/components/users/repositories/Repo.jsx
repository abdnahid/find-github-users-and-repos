import React from 'react';

function Repo({repo,login}) {
    return (
        <div className="card">
            <h3><a href={`https://github.com/${login}/${repo.name}`} target="_blank" rel="noreferrer">{repo.name}</a></h3>
        </div>
    )
}

export default Repo;