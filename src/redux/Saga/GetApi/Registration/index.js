import axios from 'axios';
import qs from 'qs';
var Registration = 'http://conduit.productionready.io/api/users';

function RegistrationthroughtApi(username, email, password) {
    // const options = {
    //     headers: { 'content-type': 'application/json' },
    //     user: { email: email, password: password }
    // };
    const options = {
        method: 'POST',
        headers: { 'Content-Type':'application/json; charseot=utf-8'},
        data: {user:{ username: username ,email: email, password: password }},
        url: Registration
    }
    return axios(options).then(res => {
        console.log('tolken', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const RegistrationApi = {
    RegistrationthroughtApi
};