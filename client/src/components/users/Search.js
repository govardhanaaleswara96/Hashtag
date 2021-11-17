import React, { useState, useContext } from 'react'
import twitterContext from '../../context/twitter/twitterContext';
import alertContext from '../../context/alert/alertContext';
const Search = () => {
    const TwitterContext = useContext(twitterContext);
    const AlertContext = useContext(alertContext)

    const { searchUsers } = TwitterContext;
    const [text, setText] = useState('');

    const OnChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            AlertContext.setAlert('Please Enter Something', 'light');
        }
        else {
            searchUsers(text);
            setText("")
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text"
                    name="text"
                    placeholder="Search users..."
                    value={text}
                    onChange={OnChange}
                />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
        </div>
    )
}

export default Search
