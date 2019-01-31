//import React, { Component } from 'react';
import axios from 'axios';
const articles = 'http://conduit.productionready.io/api/profiles/';
function getProfileUserFromApi(username) {
    //console.log(tags, offset);
        return axios.get(articles + username).then(res => {
            //console.log('singleapi', res);
            return res.data;
        }).catch(function (error) {
            throw error;
        })
}

export const ProfileUser = {
    getProfileUserFromApi
};