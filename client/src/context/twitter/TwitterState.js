import React, { useReducer, useState } from "react";
import axios from 'axios';
import twitterContext from "./twitterContext";
import twitterReducer from "./twitterReducer";
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_COUNTS
} from "../types";
const TwitterState = (props) => {
    const initialState = {
        tweets: [],
        counts: 0,
        searchText: "",
        loading: false
    }
    const [state, dispatch] = useReducer(twitterReducer, initialState);
    // Search Users
    const searchUsers = async (text) => {
        setLoading();
        state.searchText = text;
        getCounts(text);
        const res = await axios.get(`/api/tweet?searchText=${text}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.tweets
        });
    };
    // Get Counts 
    const getCounts = async (text) => {
        const arr = state.tweets;
        if (arr.length <= 0) {
            const res = await axios.get(`/api/tweet/count?searchText=${"westandwithsuriya"}`);
            dispatch({
                type: GET_COUNTS,
                payload: res.data.counts
            });
        }
    };
    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <twitterContext.Provider
        value={{
            tweets: state.tweets,
            counts: state.counts,
            loading: state.loading,
            searchText: state.searchText,
            searchUsers,
            setLoading,
            getCounts
        }}
    >
        {props.children}
    </twitterContext.Provider>
}
export default TwitterState;