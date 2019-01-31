import {FETCH_FAILED, FETCH_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS} from '../../Actions/actionTypes';
const getCurrentUserReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case FETCH_CURRENT_USER_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default getCurrentUserReducer;