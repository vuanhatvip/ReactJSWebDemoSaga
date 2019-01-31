import {FETCH_FAILED, UNFAVORITE_ARTICLE, UNFAVORITE_ARTICLE_SUCCESS} from '../../Actions/actionTypes';
const unfavoriteArticleReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case UNFAVORITE_ARTICLE_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default unfavoriteArticleReducer;