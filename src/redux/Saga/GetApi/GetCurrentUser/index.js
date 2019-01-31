import axios from 'axios';
import qs from 'qs';
var Login = 'http://conduit.productionready.io/api/user';

function GetCurrentUserThroughtApi(tolken) {
    const options = {
        method: 'GET',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        //data: {user:{ email: email, password: password }},
        url: Login
    }
    return axios(options).then(res => {
        console.log('current user', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const GetCurrentUserApi = {
    GetCurrentUserThroughtApi
};