import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import twitterContext from '../../context/twitter/twitterContext';
const Users = () => {
    const TwitterContext = useContext(twitterContext);
    const { tweets, loading, searchUsers, searchText } = TwitterContext;
    // console.log(tweets)
    const loadUsers = (() => {
        console.log(searchText);
        searchUsers(searchText);
    })
    if (loading) {
        return <Spinner />;
    }
    else {
        return (
            tweets.length > 0 && (
                <div className="card">
                    <div style={userStyle}>
                        {tweets.map((tweet, i) => (
                            <UserItem key={i} tweet={tweet} />
                        ))}
                    </div>
                    <button onClick={loadUsers} className="btn btn-light btn-block">Load More</button>
                </div>

            ))
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}


export default Users
