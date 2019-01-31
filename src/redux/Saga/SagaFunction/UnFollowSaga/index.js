import {FETCH_FAILED, FETCH_UNFOLLOW,  FETCH_UNFOLLOW_SUCCESS} from '../../../Actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {UnFollowApi} from '../../GetApi/UnFollowApi/index';

function* fetchUnFollowThroughtApi (params){
    try {
        const receivedApi = yield call (UnFollowApi.UnFollowThroghtApi, params.username, params.tolken);
        yield put({type: FETCH_UNFOLLOW_SUCCESS, receivedApi: receivedApi})
    } catch(error){
        yield put({type: FETCH_FAILED, error});
        console.log(error.response);
        //console.log(error)
    }
}
export function* watchFetchUnFollowthroghtApi(){
    yield takeLatest(FETCH_UNFOLLOW, fetchUnFollowThroughtApi);
}