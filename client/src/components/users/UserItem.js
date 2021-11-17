import React from 'react'
import PropTypes from 'prop-types';
const UserItem = ({ tweet: { userScreenName, userImage, text } }) => {
    return (
        <div className="card text-center">
            <img src={userImage}
                alt="img"
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{userScreenName}</h3>
            <p>{text}</p>
        </div>
    )
}

UserItem.propTypes = {
    tweet: PropTypes.object.isRequired,
}


export default UserItem
