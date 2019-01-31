import {FETCH_FAILED, FETCH_FOLLOW,  FETCH_FOLLOW_SUCCESS} from '../../../Actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {FollowApi} from '../../GetApi/FollowApi/index';

function* fetchFollowThroughtApi (params){
    try {
        const receivedApi = yield call (FollowApi.FollowThroghtApi, params.username, params.tolken);
        yield put({type: FETCH_FOLLOW_SUCCESS, receivedApi: receivedApi})
    } catch(error){
        yield put({type: FETCH_FAILED, error});
        console.log(error.response);
        //console.log(error)
    }
}
export function* watchFetchFollowthroghtApi(){
    yield takeLatest(FETCH_FOLLOW, fetchFollowThroughtApi);
}