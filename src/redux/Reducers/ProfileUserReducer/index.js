import { FETCH_PROFILE_USER_SUCESS, FETCH_FAILED } from '../../Actions/actionTypes';
const profileUserReducer = (api = [], action) => {
    switch (action.type) {
        case FETCH_PROFILE_USER_SUCESS:
            return  action.receivedApi;
        case FETCH_FAILED:
            return [];
        default:
            return api; 
    }
}

export default profileUserReducer;