import { combineReducers } from 'redux';
import apiReducers from './ApiReducers/index';
import tagsReducers from './TagsReducer/index';
import singleArticleReducers from './SingleArticleReducer/index';
import commentsReducers from './CommentsArticle/index';
import profileUserReducer from './ProfileUserReducer/index';
import loginReducer from './LoginReducer/index';
import getCurrentUserReducer from './CurrentUserReducer/index';
import loginStatusReducer from'./ChangeStatusLoginReducer/index';
import updateSettingReducer from './UpdateSettingReducers/index';
import changeStatusReducers from './ChangStatusUpdateAction/index';
import createArticleReducer from './CreateArticleReducer/index';
import editArticleReducer from './EditArticleReducer/index';
import followReducer from './FollowReduceer/index';
import unFollowReducer from './UnfollowReducer/index';
import favoriteArticleReducer from './FavoriteArticleReducer/index';
import unfavoriteArticleReducer from './UnfavoriteArticleReducer/index';
import deleteArticleReducer from './DeleteArticleReducer/index';
import addCommentReducer from './AddCommentReducer/index';
import deleteCommentReducer from './DeleteCommentReducer/index';
import registrationReducer from './Registration/index';
const allReducers = combineReducers({
    apiReducers,
    tagsReducers,
    singleArticleReducers,
    commentsReducers,
    profileUserReducer,
    loginReducer,
    getCurrentUserReducer,
    loginStatusReducer,
    updateSettingReducer,
    changeStatusReducers,
    createArticleReducer,
    editArticleReducer,
    followReducer,
    unFollowReducer,
    favoriteArticleReducer,
    unfavoriteArticleReducer,
    deleteArticleReducer,
    addCommentReducer,
    deleteCommentReducer,
    registrationReducer
});
export default allReducers;