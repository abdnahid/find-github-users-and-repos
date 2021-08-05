import React from 'react';
import PropTypes from "prop-types";

const Navbar = (props)=> {
    const {icon,title}=props;
        return (
            <nav className="navbar bg-primary">
                <h1><i className={icon} /> {title}</h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        )
    }

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Github",
    icon: "fab fa-facebook"
}

export default Navbar
