import axios from 'axios';

var feedArticle = 'http://conduit.productionready.io/api/articles';

function CreateArticleThroghtApi(title, description, body, tagList, tolken){
    const options = {
        method: 'POST',
        headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
        data: {article:{ title: title, description: description, body: body, tagList: tagList }},
        url: feedArticle
    }
    return axios(options).then(res => {
        console.log('tolken', res);
        return res.data;
    }).catch(function (error) {
        //console.log(error.response);
        throw error;
    })
}

export const CreateArticleApi = {
    CreateArticleThroghtApi
}