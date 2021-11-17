import {
    SEARCH_USERS,
    GET_COUNTS,
} from "../types";
const twitterReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                tweets: action.payload,
                loading: false
            }
        case GET_COUNTS:
            return {
                ...state,
                counts: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export default twitterReducer;