import axios from 'axios';

var unfollow = 'http://conduit.productionready.io/api/profiles/';

function UnFollowThroghtApi(username, tolken){
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        url: unfollow + username + '/follow'
    }
    return axios(options).then(res => {
        console.log('UnFollow', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const UnFollowApi = {
    UnFollowThroghtApi
}