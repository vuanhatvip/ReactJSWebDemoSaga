import {FETCH_LOGIN, FETCH_LOGIN_SUCCESS, FETCH_FAILED} from '../../../Actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {LoginApi} from '../../GetApi/Login/index';

function* fetchLoginThroughtApi (params){
    try {
        const receivedApi = yield call (LoginApi.LoginthroughtApi, params.email, params.password);
        yield put({type: FETCH_LOGIN_SUCCESS, receivedApi: receivedApi})
    } catch(error){
        yield put({type: FETCH_FAILED, error});
        console.log(error.response);
        //console.log(error)
    }
}
export function* watchFetchLoginthroghtApi(){
    yield takeLatest(FETCH_LOGIN, fetchLoginThroughtApi);
}