import { FETCH_PROFILE_USER_SUCESS, FETCH_PROFILE_USER, FETCH_FAILED } from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import {ProfileUser} from '../../GetApi/GetProfileUser/index';

function* fetchProfileUserApi(params) {
    try {
        const receivedApi = yield call(ProfileUser.getProfileUserFromApi, params.username);   
        //console.log('res1',receivedApi);
        yield put({ type: FETCH_PROFILE_USER_SUCESS, receivedApi: receivedApi });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchProfileUserApi() {
    yield takeLatest(FETCH_PROFILE_USER, fetchProfileUserApi);
}