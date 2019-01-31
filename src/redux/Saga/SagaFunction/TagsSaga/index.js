import { FETCH_TAGS, FETCH_TAGS_SUCCESS, FETCH_FAILED } from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import {ApiTags} from '../../GetApi/GetTagsApi/index';

function* fetchTagsApi() {
    try {
        const receivedApi = yield call(ApiTags.getListTagsFromApi);   
        //console.log('res1',receivedApi);
        yield put({ type: FETCH_TAGS_SUCCESS, receivedApi: receivedApi });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchTagsApi() {
    yield takeLatest(FETCH_TAGS, fetchTagsApi);
}