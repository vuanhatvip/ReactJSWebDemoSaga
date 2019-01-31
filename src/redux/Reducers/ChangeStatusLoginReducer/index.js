import { CHANGE_STATUS_LOGIN } from '../../Actions/actionTypes';
const loginStatusReducer = (status = "", action) => {
    switch (action.type) {
        case CHANGE_STATUS_LOGIN:
            return  action.status;
        default:
            return status; 
    }
}

export default loginStatusReducer;