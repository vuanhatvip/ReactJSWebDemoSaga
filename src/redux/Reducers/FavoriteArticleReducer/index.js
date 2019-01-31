import {FETCH_FAILED, FAVORITE_ARTICLE, FAVORITE_ARTICLE_SUCCESS} from '../../Actions/actionTypes';
const favoriteArticleReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case FAVORITE_ARTICLE_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default favoriteArticleReducer;