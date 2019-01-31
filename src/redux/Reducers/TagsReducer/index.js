import {  FETCH_FAILED, FETCH_TAGS,FETCH_TAGS_SUCCESS } from '../../Actions/actionTypes';
const tagsReducers = (api = [], action) => {
    switch (action.type) {
        case FETCH_FAILED:
            return [];
        case FETCH_TAGS_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}

export default tagsReducers;