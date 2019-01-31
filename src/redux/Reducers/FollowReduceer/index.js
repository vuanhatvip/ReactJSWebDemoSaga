import {FETCH_FAILED, FETCH_FOLLOW, FETCH_FOLLOW_SUCCESS} from '../../Actions/actionTypes';
const followReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case FETCH_FOLLOW_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default followReducer;