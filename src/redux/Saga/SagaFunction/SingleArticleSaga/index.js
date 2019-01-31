import { FETCH_SINGLE_ARTICLE, FETCH_SINGLE_ARTICLE_SUCCESS, FETCH_FAILED } from '../../../Actions/actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import {SingleArticle} from '../../GetApi/GetSingleArticle/index';

function* fetchSingleArticleApi(params){
    try{
        const receivedApi = yield call(SingleArticle.getSingleArticleFromApi, params.slug);
        yield put({type:FETCH_SINGLE_ARTICLE_SUCCESS, receivedApi: receivedApi})

    }catch(error){
        yield put({type:FETCH_FAILED, error});
    }
}

export function* watchFetchSingleArticleApi(){
    yield takeLatest(FETCH_SINGLE_ARTICLE, fetchSingleArticleApi);
}