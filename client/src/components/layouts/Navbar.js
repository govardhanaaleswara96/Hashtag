import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import twitterContext from '../../context/twitter/twitterContext';
const Navbar = ({ icon, title }) => {
    const TwitterContext = useContext(twitterContext);
    const { counts, tweets } = TwitterContext;
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}></i> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <i style={iconStyle} className="fa fa-bell">
                    </i>
                    <sup style=
                        {
                            { color: "red", fontWeight: "bold" }
                        }>{tweets.length > 0 ? counts : 0}</sup>
                </li>
            </ul>
        </nav>
    )
}
Navbar.defaultProps = {
    title: "Hashtag",
    icon: "fab fa-twitter"
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

const iconStyle = {
    color: "white"
}
export default Navbar
