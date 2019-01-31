import {FETCH_FAILED, REGISTRATION, REGISTRATION_SUCCESS} from '../../Actions/actionTypes';
const registrationReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case REGISTRATION_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default registrationReducer;