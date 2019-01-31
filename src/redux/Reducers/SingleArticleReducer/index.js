import { FETCH_API, FETCH_SINGLE_ARTICLE_SUCCESS, FETCH_FAILED } from '../../Actions/actionTypes';
const singleArticleReducers = (api = [], action) => {
    switch (action.type) {
        case FETCH_SINGLE_ARTICLE_SUCCESS:
            return  action.receivedApi;
        case FETCH_FAILED:
            return [];
        default:
            return api;
    }
}

export default singleArticleReducers;