import axios from 'axios';

var UnFavorite = 'http://conduit.productionready.io/api/articles/';

function UnFavoriteThroghtApi(slug, tolken){
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        url: UnFavorite + slug + '/favorite'
    }
    return axios(options).then(res => {
        console.log('UnFavorite', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const UnFavoriteApi = {
    UnFavoriteThroghtApi
}