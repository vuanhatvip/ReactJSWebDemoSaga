import {FETCH_FAILED, FETCH_UNFOLLOW, FETCH_UNFOLLOW_SUCCESS} from '../../Actions/actionTypes';
const unFollowReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case FETCH_UNFOLLOW_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default unFollowReducer;