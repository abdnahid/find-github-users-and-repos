import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-body">
            <h1 className="not-found">404</h1>
            <p className="not-found">Oops! Something is wrong.</p>
            <Link className="not-found-button" to="/"><i class="icon-home"></i> Go back to Homepage</Link>
        </div>
    )
}

export default NotFound;
