import {FETCH_UPDATE_SETTING, FETCH_UPDATE_SETTING_SUCCESS, FETCH_FAILED} from '../../../Actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {UpdateUserApi} from '../../GetApi/UpdateProfileUser';

function* fetchUpdateUserThroughtApi (params){
    try {
        const receivedApi = yield call (UpdateUserApi.UpdateUserThroughtApi, params.user, params.tolken);
        yield put({type: FETCH_UPDATE_SETTING_SUCCESS, receivedApi: receivedApi})
    } catch(error){
        yield put({type: FETCH_FAILED, error});
        console.log(error.response);
        //console.log(error)
    }
}
export function* watchFetchUpdateUserthroghtApi(){
    yield takeLatest(FETCH_UPDATE_SETTING, fetchUpdateUserThroughtApi);
}