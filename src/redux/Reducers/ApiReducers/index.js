import { FETCH_API, FETCH_SUCCEEDED, FETCH_FAILED } from '../../Actions/actionTypes';
const apiReducers = (api = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return  action.receivedApi;
        case FETCH_FAILED:
            return [];
        default:
            return api;
    }
}

export default apiReducers;