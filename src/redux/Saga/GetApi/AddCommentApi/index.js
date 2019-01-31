import axios from 'axios';

var addComment = 'http://conduit.productionready.io/api/articles/';

function AddCommentThroghtApi(slug, body, tolken){
    const options = {
        method: 'POST',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        data: {comment:{ body: body}},
        url: addComment + '/' + slug + '/comments'
    }
    return axios(options).then(res => {
        console.log('Add Comment', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const AddCommentApi = {
    AddCommentThroghtApi
}