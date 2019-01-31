import axios from 'axios';

var deleteArticle = 'http://conduit.productionready.io/api/articles/';

function DeleteArticleThroghtApi(slug, tolken){
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        url: deleteArticle + '/' + slug
    }
    return axios(options).then(res => {
        console.log('Delete Article', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}

export const DeleteArticleApi = {
    DeleteArticleThroghtApi
}