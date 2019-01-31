import axios from 'axios';

var editArticle = 'http://conduit.productionready.io/api/articles';

function EditArticleThroghtApi(title, slug, description, body, tolken){
    const options = {
        method: 'PUT',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        data: {article:{ title: title, description: description, body: body}},
        url: editArticle + '/' + slug
    }
    return axios(options).then(res => {
        console.log('Edit article', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}
export const EditArticleApi = {
    EditArticleThroghtApi
}