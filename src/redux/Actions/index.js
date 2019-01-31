import { FETCH_API, FETCH_SUCCEEDED, FETCH_FAILED, FETCH_TAGS, 
    FETCH_TAGS_SUCCESS, FETCH_SINGLE_ARTICLE, FETCH_COMMENTS,
    FETCH_SINGLE_ARTICLE_SUCCESS, FETCH_COMMENTS_SUCCESS,
    FETCH_PROFILE_USER, FETCH_PROFILE_USER_SUCESS,
    FETCH_LOGIN, FETCH_LOGIN_SUCCESS, 
    FETCH_CREATE_ARTICLE, FETCH_CREATE_ARTICLE_SUCCESS,
    FETCH_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS,
    CHANGE_STATUS_LOGIN, FETCH_UPDATE_SETTING, FETCH_UPDATE_SETTING_SUCCESS,
    UPDATE_STATUS_PROFILE, FETCH_EDIT_ARTICLE, FETCH_EDIT_ARTICLE_SUCCESS, FETCH_FOLLOW,
    FETCH_FOLLOW_SUCCESS, FETCH_UNFOLLOW, FETCH_UNFOLLOW_SUCCESS, FAVORITE_ARTICLE, FAVORITE_ARTICLE_SUCCESS,
    DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_COMMENT, DELETE_COMMENT_SUCCESS, ADD_COMMENT, ADD_COMMENT_SUCCESS,
    UNFAVORITE_ARTICLE, UNFAVORITE_ARTICLE_SUCCESS, REGISTRATION, REGISTRATION_SUCCESS
 } from './actionTypes';

export const fetchApisAction = (tags, offset, yourfeed, author, favorite) => {
    return {
        type: FETCH_API,
        //sort,
        tags,
        offset, 
        yourfeed, 
        author, 
        favorite
    }
}
export const fectTagsSucess = (receivedApi)=>{
    return{
        type: FETCH_TAGS_SUCCESS,
        receivedApi
    }
}
export const fetchSuccessAction = ( receivedApi) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedApi,
    }
}

export const fetchTagsAction = ()=>{
  return{
      type: FETCH_TAGS,
  }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}

export const fetchSingleArticleAction=(slug)=>{
    return {
        type: FETCH_SINGLE_ARTICLE,
        slug,
    }
}

export const fetchCommentsAction=(slug)=>{
    return{
        type: FETCH_COMMENTS,
        slug
    }
}

export const fetchSingleArticleSuccess=(receivedApi)=>{
    return{
        type: FETCH_SINGLE_ARTICLE_SUCCESS,
        receivedApi
    }
}

export const fetchCommentsSuccess=(receivedApi)=>{
    return{
        type: FETCH_COMMENTS_SUCCESS,
        receivedApi
    }
}

export const fetchProfileUserAction=(username)=>{
    return{
        type: FETCH_PROFILE_USER,
        username
    }
}

export const fetchProfileUserSuccess=(receivedApi)=>{
    return{
        type: FETCH_PROFILE_USER_SUCESS,
        receivedApi
    }
}

export const fetchLoginAction = (email, password)=>{
    return {
        type: FETCH_LOGIN,
        email,
        password
    }
}

export const fetchLoginSuccess = (receivedApi)=>{
    return {
        type: FETCH_LOGIN_SUCCESS,
        receivedApi
    }
}

export const fetchCreateArticleAction = (title, description, body, tagList, tolken )=>{
    return{
        type: FETCH_CREATE_ARTICLE,
        title,
        description,
        body,
        tagList,
        tolken
    }
}

export const fetchCreateArticleSuccess = (receivedApi) =>{
    return{
        type: FETCH_CREATE_ARTICLE_SUCCESS,
        receivedApi
    }
}

export const fetchCurrentUserAction = (tolken)=>{
    return{
        type: FETCH_CURRENT_USER,
        tolken
    }
}
export const fetchCurrentUserSucces = (receivedApi)=>{
    return{
        type: FETCH_CURRENT_USER_SUCCESS,
        receivedApi
    }
}
export const changeStatusLogin = (status)=>{
    return{
        type:CHANGE_STATUS_LOGIN,
        status
    }
}
export const fetchUpdateSettingAction = (user, tolken)=>{
    return{
        type: FETCH_UPDATE_SETTING,
        user, 
        tolken
    }
}
export const fetchUpdateSettingSucces = (receivedApi)=>{
    return{
        type: FETCH_UPDATE_SETTING_SUCCESS,
        receivedApi
    }
}
export const ChangeStatusUpdateAction = ()=>{
    return{
        type: UPDATE_STATUS_PROFILE
    }
}
export const FetchEditArticleAction = (title, slug,description, body, tolken) => {
    return {
        type: FETCH_EDIT_ARTICLE,
        title,
        slug,
        description,
        body,
        tolken
    }
}
export const FetchEditArticleSuccess = (receivedApi) =>{
    return{
        type: FETCH_EDIT_ARTICLE_SUCCESS,
        receivedApi
    }
}
export const FetchFollowAction = (username, tolken) => {
    return {
        type: FETCH_FOLLOW,
        username,
        tolken
    }
}
export const FetchFollowSuccess= (receivedApi) =>{
    return {
        type: FETCH_FOLLOW_SUCCESS,
        receivedApi
    }
}
export const FetchUnFollowAction = (username, tolken) =>{
    return{
        type: FETCH_UNFOLLOW,
        username,
        tolken
    }
}
export const FetchUnFollowSuccess = (receivedApi) =>{
    return {
        type: FETCH_UNFOLLOW_SUCCESS,
        receivedApi
    }
}
export const FavoriteArticleAction = (slug, tolken) => {
    return {
        type: FAVORITE_ARTICLE,
        slug,
        tolken
    }
}  
export const FavoriteArticleSuccess = (receivedApi) => {
    return {
        type: FAVORITE_ARTICLE_SUCCESS,
        receivedApi
    }
}
export const UnFavoriteArticleAtion = (slug, tolken) =>{
    return {
        type: UNFAVORITE_ARTICLE,
        slug,
        tolken
    }
}
export const UnFavoriteArticleSuccess = (receivedApi) => {
    return {
        type: UNFAVORITE_ARTICLE_SUCCESS,
        receivedApi
    }
}

export const DeleteArticleAction = (slug, tolken) => {
    return {
        type: DELETE_ARTICLE,
        slug,
        tolken
    }
}

export const DeleteArticleSuccess = (receivedApi) => {
    return {
        type: DELETE_ARTICLE_SUCCESS,
        receivedApi
    }
}

export const AddCommentAction = (slug, body, tolken)=>{
    return {
        type: ADD_COMMENT,
        slug,
        body,
        tolken
    }
}

export const AddCommentSuccess = (receivedApi) =>{
    return {
        type: ADD_COMMENT_SUCCESS,
        receivedApi
    }
}

export const DeleteCommentAction = (slug, id, tolken) =>{
    return {
        type: DELETE_COMMENT,
        slug,
        id,
        tolken
    }
}

export const DeleteCommentSuccess = (receivedApi) => {
    return {
        type: DELETE_COMMENT_SUCCESS,
        receivedApi
    }
}

export const RegistrationAction = (username, email, password)=>{
    return {
        type: REGISTRATION,
        username,
        email,
        password
    }
}

export const RegistrationSuccess = (receivedApi) => {
    return {
        type: REGISTRATION_SUCCESS,
        receivedApi
    }
}