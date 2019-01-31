import { FETCH_API, FETCH_SUCCEEDED, FETCH_FAILED } from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import { Api } from '../../GetApi/Api/index';

function* fetchApi(params) {
    console.log('params',params.author)
    try {
        //console.log(params.yourfeed)
        const receivedApi = yield call(Api.getArticleFromApi, params.tags, params.offset, params.yourfeed, params.author, params.favorite);   
        //console.log('res1',receivedApi);
        yield put({ type: FETCH_SUCCEEDED, receivedApi: receivedApi });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchApi() {
    yield takeLatest(FETCH_API, fetchApi);
}