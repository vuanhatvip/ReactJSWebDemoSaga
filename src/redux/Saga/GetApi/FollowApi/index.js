import axios from 'axios';

var follow = 'http://conduit.productionready.io/api/profiles/';

function FollowThroghtApi(username, tolken){
    const options = {
        method: 'POST',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        url: follow + username + '/follow'
    }
    return axios(options).then(res => {
        console.log('Follow', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const FollowApi = {
    FollowThroghtApi
}