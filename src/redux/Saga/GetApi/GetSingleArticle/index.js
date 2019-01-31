//import React, { Component } from 'react';
import axios from 'axios';
const articles = 'http://conduit.productionready.io/api/articles/';
function getSingleArticleFromApi(slug) {
   
    //console.log(tags, offset);
        return axios.get(articles + slug).then(res => {
            console.log('singleapi', res);
            return res.data;
        }).catch(function (error) {
            throw error;
        })
    }


export const SingleArticle = {
    getSingleArticleFromApi
};