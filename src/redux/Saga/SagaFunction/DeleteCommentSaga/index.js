import { FETCH_FAILED, DELETE_COMMENT, DELETE_COMMENT_SUCCESS } from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import {DeleteCommentApi} from '../../GetApi/DeletCommnetApi/index';

function* fetchDeleteCommentsApi(params) {
    try {
        const receivedApi = yield call(DeleteCommentApi.DeleteCommentThroghtApi, params.slug, params.id, params.tolken);   
        //console.log('res1',receivedApi);
        yield put({ type: DELETE_COMMENT_SUCCESS, receivedApi: receivedApi });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchDeleteCommentsApi() {
    yield takeLatest(DELETE_COMMENT, fetchDeleteCommentsApi);
}