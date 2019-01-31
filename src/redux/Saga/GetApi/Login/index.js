import axios from 'axios';
import qs from 'qs';
var Login = 'http://conduit.productionready.io/api/users/login';

function LoginthroughtApi(email, password) {
    // const options = {
    //     headers: { 'content-type': 'application/json' },
    //     user: { email: email, password: password }
    // };
    const options = {
        method: 'POST',
        headers: { 'Content-Type':'application/json; charseot=utf-8'},
        data: {user:{ email: email, password: password }},
        url: Login
    }
    return axios(options).then(res => {
        console.log('tolken', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const LoginApi = {
    LoginthroughtApi
};