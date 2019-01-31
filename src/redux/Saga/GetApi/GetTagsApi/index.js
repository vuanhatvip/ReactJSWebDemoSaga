import React, { Component } from 'react';
import axios from 'axios';
const articles = 'http://conduit.productionready.io/api/tags';
function getListTagsFromApi() {
    //console.log(tags, offset);
        return axios.get(articles).then(res => {
            //console.log('restags', res);
            return res.data;
        }).catch(function (error) {
            throw error;
        })
}

export const ApiTags = {
    getListTagsFromApi
};
