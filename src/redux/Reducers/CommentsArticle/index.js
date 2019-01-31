import { FETCH_COMMENTS_SUCCESS, FETCH_FAILED } from '../../Actions/actionTypes';
const commentsReducers = (api = [], action) => {
    switch (action.type) {
        case FETCH_COMMENTS_SUCCESS:
            return  action.receivedApi;
        case FETCH_FAILED:
            return [];
        default:
            return api; 
    }
}

export default commentsReducers;