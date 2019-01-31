import {FETCH_FAILED, DELETE_ARTICLE,  DELETE_ARTICLE_SUCCESS} from '../../../Actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {DeleteArticleApi} from '../../GetApi/DeleteArticleApi/index';

function* fetchDeleteArticleThroughtApi (params){
    try {
        const receivedApi = yield call (DeleteArticleApi.DeleteArticleThroghtApi, params.slug, params.tolken);
        yield put({type: DELETE_ARTICLE_SUCCESS, receivedApi: receivedApi})
    } catch(error){
        yield put({type: FETCH_FAILED, error});
        console.log(error.response);
        //console.log(error)
    }
}
export function* watchFetchDeleteArticlethroghtApi(){
    yield takeLatest(DELETE_ARTICLE, fetchDeleteArticleThroughtApi);
}