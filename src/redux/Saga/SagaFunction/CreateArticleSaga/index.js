import {FETCH_CREATE_ARTICLE, FETCH_CREATE_ARTICLE_SUCCESS, FETCH_FAILED} from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import {CreateArticleApi} from '../../GetApi/CreateArticleThroughtApi/index';

function* fetchCreateArticleApi(params) {
    try {
        const receivedApi = yield call(CreateArticleApi.CreateArticleThroghtApi, params.title, params.description, params.body, params.tagList, params.tolken);   
        //console.log('res1',receivedApi);
        yield put({ type: FETCH_CREATE_ARTICLE_SUCCESS, receivedApi: receivedApi });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchCreateArticleApi() {
    yield takeLatest(FETCH_CREATE_ARTICLE, fetchCreateArticleApi);
}