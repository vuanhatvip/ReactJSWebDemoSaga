import axios from 'axios';
import qs from 'qs';
var update = 'http://conduit.productionready.io/api/user';

function UpdateUserThroughtApi(user, tolken) {
    console.log(user,'/n', tolken)
    // const options = {
    //     headers: { 'content-type': 'application/json' },
    //     user: { email: email, password: password }
    // };
    let options;
    if(user.newpassword)
        options = {
            method: 'PUT',
            headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
            data: {user:{ email: user.email, username: user.username, bio: user.bio, image: user.image, password:user.newpassword }},
            url: update
        };
    else{   
        options = {
            method: 'PUT',
            headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
            data: {user:{ email: user.email, username: user.username, bio: user.bio, image: user.image}},
            url: update
        }; 
    }
    return axios(options).then(res => {
        console.log('update user', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const UpdateUserApi = {
    UpdateUserThroughtApi
};