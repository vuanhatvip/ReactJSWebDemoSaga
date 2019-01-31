import React, { Component } from 'react';
import axios from 'axios';
const articles = 'http://conduit.productionready.io/api/articles?limit=10&offset=';
const feed = 'http://conduit.productionready.io/api/articles/feed?limit=10&offset=';
function getArticleFromApi(tags, offset, yourfeed, author, favorite) {
    const tolken = sessionStorage.getItem('tolken');
    if (yourfeed == true){
        console('api test')
        if(tags == "")
        {
            const options = {
                method: 'GET',
                headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
                //data: {user:{ email: email, password: password }},
                url: feed + offset
            };
            return axios(options).then(res => {
                console.log('res', res);
                return res.data;
            }).catch(function (error) {
                throw error;
            })
        }
        else{
            const options = {
                method: 'GET',
                headers: { 'Content-Type':'application/json; charseot=utf-8', Authorization:'Token ' + tolken},
                //data: {user:{ email: email, password: password }},
                url: feed + offset + '&tag=' + tags
            };
            return axios(options).then(res => {
                console.log('res', res);
                return res.data;
            }).catch(function (error) {
                throw error;
            })
        }
    }
    else{
        
        if(tags == "")
        {
            
            if(author != '')
            {
                return axios.get(articles + offset + '&author=' + author).then(res => {
                    console.log('res', res);
                    return res.data;
                }).catch(function (error) {
                    throw error;
                })
            }
            if(favorite)
            {
                return axios.get(articles + offset + '&favorited=' + favorite).then(res => {
                    console.log('res', res);
                    return res.data;
                }).catch(function (error) {
                    throw error;
                })
            }
            else
            {
                return axios.get(articles + offset).then(res => {
                    console.log('res', res);
                    return res.data;
                }).catch(function (error) {
                    throw error;
                })
            }
          
        }
        else{
            return axios.get(articles + offset + '&tag=' + tags).then(res => {
                console.log('res', res);
                return res.data;
            }).catch(function (error) {
                throw error;
            })
        }
    }
}

export const Api = {
    getArticleFromApi
};
