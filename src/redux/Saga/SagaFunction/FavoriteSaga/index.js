import {FETCH_FAILED, FAVORITE_ARTICLE,  FAVORITE_ARTICLE_SUCCESS} from '../../../Actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {FavoriteApi} from '../../GetApi/FavoriteArticleApi/index';

function* fetchFavoriteThroughtApi (params){
    try {
        const receivedApi = yield call (FavoriteApi.FavoriteThroghtApi, params.slug, params.tolken);
        yield put({type: FAVORITE_ARTICLE_SUCCESS, receivedApi: receivedApi})
    } catch(error){
        yield put({type: FETCH_FAILED, error});
        console.log(error.response);
        //console.log(error)
    }
}
export function* watchFetchFavoritethroghtApi(){
    yield takeLatest(FAVORITE_ARTICLE, fetchFavoriteThroughtApi);
}