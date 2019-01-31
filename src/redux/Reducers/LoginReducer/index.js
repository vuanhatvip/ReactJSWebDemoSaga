import {FETCH_FAILED, FETCH_LOGIN, FETCH_LOGIN_SUCCESS} from '../../Actions/actionTypes';
const loginReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case FETCH_LOGIN_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default loginReducer;