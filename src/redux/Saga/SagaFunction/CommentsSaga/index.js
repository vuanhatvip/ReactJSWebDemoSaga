import { FETCH_COMMENTS, FETCH_COMMENTS_SUCCESS, FETCH_FAILED } from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import {Comments} from '../../GetApi/GetComments/index';

function* fetchCommentsApi(params) {
    try {
        const receivedApi = yield call(Comments.getCommentsFromApi, params.slug);   
        //console.log('res1',receivedApi);
        yield put({ type: FETCH_COMMENTS_SUCCESS, receivedApi: receivedApi });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchCommentsApi() {
    yield takeLatest(FETCH_COMMENTS, fetchCommentsApi);
}