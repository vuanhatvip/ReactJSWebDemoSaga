import {FETCH_CREATE_ARTICLE_SUCCESS, FETCH_CREATE_ARTICLE, FETCH_FAILED} from '../../Actions/actionTypes';
const createArticleReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case FETCH_CREATE_ARTICLE_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default createArticleReducer;