import {FETCH_FAILED, FETCH_EDIT_ARTICLE, FETCH_EDIT_ARTICLE_SUCCESS} from '../../Actions/actionTypes';
const editArticleReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case FETCH_EDIT_ARTICLE_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default editArticleReducer;