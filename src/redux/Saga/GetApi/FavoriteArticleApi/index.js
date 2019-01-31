import axios from 'axios';

var Favorite = 'http://conduit.productionready.io/api/articles/';

function FavoriteThroghtApi(slug, tolken){
    const options = {
        method: 'POST',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        url: Favorite + slug + '/favorite'
    }
    return axios(options).then(res => {
        console.log('Favorite', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const FavoriteApi = {
    FavoriteThroghtApi
}