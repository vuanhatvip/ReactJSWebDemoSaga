import {FETCH_EDIT_ARTICLE, FETCH_EDIT_ARTICLE_SUCCESS, FETCH_FAILED} from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import {EditArticleApi} from '../../GetApi/EditArticleAPi/index';

function* fetchEditArticleApi(params) {
    try {
        const receivedApi = yield call(EditArticleApi.EditArticleThroghtApi, params.title, params.slug, params.description, params.body, params.tolken);   
        //console.log('res1',receivedApi);
        yield put({ type: FETCH_EDIT_ARTICLE_SUCCESS, receivedApi: receivedApi });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchEditArticleApi() {
    yield takeLatest(FETCH_EDIT_ARTICLE, fetchEditArticleApi);
}