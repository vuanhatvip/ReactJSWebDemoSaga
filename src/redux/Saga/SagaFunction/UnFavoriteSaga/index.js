import {FETCH_FAILED, UNFAVORITE_ARTICLE,  UNFAVORITE_ARTICLE_SUCCESS} from '../../../Actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {UnFavoriteApi} from '../../GetApi/UnFavoriteApi/index';

function* fetchUnFavoriteThroughtApi (params){
    try {
        const receivedApi = yield call (UnFavoriteApi.UnFavoriteThroghtApi, params.slug, params.tolken);
        yield put({type: UNFAVORITE_ARTICLE_SUCCESS, receivedApi: receivedApi})
    } catch(error){
        yield put({type: FETCH_FAILED, error});
        console.log(error.response);
        //console.log(error)
    }
}
export function* watchFetchUnFavoritethroghtApi(){
    yield takeLatest(UNFAVORITE_ARTICLE, fetchUnFavoriteThroughtApi);
}