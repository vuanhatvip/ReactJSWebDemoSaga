import { FETCH_FAILED, ADD_COMMENT, ADD_COMMENT_SUCCESS } from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import {AddCommentApi} from '../../GetApi/AddCommentApi/index';

function* fetchAddCommentsApi(params) {
    try {
        const receivedApi = yield call(AddCommentApi.AddCommentThroghtApi, params.slug, params.body, params.tolken);   
        //console.log('res1',receivedApi);
        yield put({ type: ADD_COMMENT_SUCCESS, receivedApi: receivedApi });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchAddCommentsApi() {
    yield takeLatest(ADD_COMMENT, fetchAddCommentsApi);
}