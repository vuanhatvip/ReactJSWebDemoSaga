import { UPDATE_STATUS_PROFILE } from '../../Actions/actionTypes';
const changeStatusReducers = (status = false, action) => {
    switch (action.type) {
        case UPDATE_STATUS_PROFILE:
            return !status;
        default:
            return status; 
    }
}

export default changeStatusReducers;