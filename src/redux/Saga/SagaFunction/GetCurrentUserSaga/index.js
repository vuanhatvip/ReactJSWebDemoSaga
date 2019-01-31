import {FETCH_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS, FETCH_FAILED} from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import {GetCurrentUserApi} from '../../GetApi/GetCurrentUser/index';

function* fetchCurrentUserApi(params) {
    try {
        const receivedApi = yield call(GetCurrentUserApi.GetCurrentUserThroughtApi, params.tolken);   
        //console.log('res1',receivedApi);
        yield put({ type: FETCH_CURRENT_USER_SUCCESS, receivedApi: receivedApi });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchCurrentUserApi() {
    yield takeLatest(FETCH_CURRENT_USER, fetchCurrentUserApi);
}