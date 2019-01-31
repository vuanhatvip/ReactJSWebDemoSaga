import axios from 'axios';

var deleteComment = 'http://conduit.productionready.io/api/articles/';

function DeleteCommentThroghtApi(slug, id, tolken){
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        url: deleteComment + '/' + slug + '/comments/' + id,
    }
    return axios(options).then(res => {
        console.log('Add Comment', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const DeleteCommentApi = {
    DeleteCommentThroghtApi
}