import {REGISTRATION_SUCCESS, REGISTRATION, FETCH_FAILED} from '../../../Actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {RegistrationApi} from '../../GetApi/Registration/index';

function* fetchRegistrationThroughtApi (params){
    try {
        const receivedApi = yield call (RegistrationApi.RegistrationthroughtApi, params.username, params.email, params.password);
        yield put({type: REGISTRATION_SUCCESS, receivedApi: receivedApi})
    } catch(error){
        yield put({type: FETCH_FAILED, error});
        console.log(error.response);
        //console.log(error)
    }
}
export function* watchFetchRegistrationthroghtApi(){
    yield takeLatest(REGISTRATION, fetchRegistrationThroughtApi);
}