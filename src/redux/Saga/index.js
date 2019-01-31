import { call, all } from 'redux-saga/effects';
import { watchFetchApi } from './SagaFunction/ArticleSagas/index';
import {watchFetchTagsApi} from './SagaFunction/TagsSaga/index';
import {watchFetchSingleArticleApi} from './SagaFunction/SingleArticleSaga/index';
import {watchFetchCommentsApi} from './SagaFunction/CommentsSaga/index';
import {watchFetchProfileUserApi} from './SagaFunction/ProfileUserSaga/index';
import {watchFetchLoginthroghtApi} from './SagaFunction/LoginSaga/index';
import {watchFetchCurrentUserApi} from './SagaFunction/GetCurrentUserSaga/index';
import {watchFetchUpdateUserthroghtApi} from './SagaFunction/UpdateUserSaga/index';
import {watchFetchCreateArticleApi} from './SagaFunction/CreateArticleSaga/index';
import {watchFetchEditArticleApi} from './SagaFunction/EditArticleSaga/index';
import {watchFetchFollowthroghtApi} from './SagaFunction/FollowSaga/index';
import {watchFetchUnFollowthroghtApi} from './SagaFunction/UnFollowSaga/index';
import {watchFetchFavoritethroghtApi} from './SagaFunction/FavoriteSaga/index';
import {watchFetchUnFavoritethroghtApi} from './SagaFunction/UnFavoriteSaga/index';
import {watchFetchAddCommentsApi} from './SagaFunction/AddCommentSaga/index';
import {watchFetchDeleteArticlethroghtApi} from './SagaFunction/DeleteArticleSaga/index';
import {watchFetchDeleteCommentsApi} from './SagaFunction/DeleteCommentSaga/index';
import {watchFetchRegistrationthroghtApi} from './SagaFunction/RegistrationSaga/index';
export default function* rootSaga() {
    yield all([
        call(watchFetchApi),
        call(watchFetchTagsApi),
        call(watchFetchSingleArticleApi),
        call(watchFetchCommentsApi),
        call(watchFetchProfileUserApi),
        call(watchFetchLoginthroghtApi),
        call(watchFetchCurrentUserApi),
        call(watchFetchUpdateUserthroghtApi),
        call(watchFetchCreateArticleApi),
        call(watchFetchEditArticleApi),
        call(watchFetchFollowthroghtApi),
        call(watchFetchUnFollowthroghtApi),
        call(watchFetchFavoritethroghtApi),
        call(watchFetchUnFavoritethroghtApi),
        call(watchFetchAddCommentsApi),
        call(watchFetchDeleteArticlethroghtApi),
        call(watchFetchDeleteCommentsApi),
        call(watchFetchRegistrationthroghtApi),
    ])      
}