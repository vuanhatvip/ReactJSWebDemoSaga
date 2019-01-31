//import React, { Component } from 'react';
import axios from 'axios';
const articles = 'http://conduit.productionready.io/api/articles/';
function getCommentsFromApi(slug) {
    //console.log(tags, offset);
    return axios.get(articles + slug + '/comments').then(res => {
        console.log('comment', res);
        return res.data;
     }).catch(function (error) {
        throw error;
    })
}

export const Comments = {
    getCommentsFromApi
};