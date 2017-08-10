import Vue from 'vue'
import axios from 'axios'

const URL_BASE = 'http://localhost/';

export default class accounts {
    static call_get(url){
        return axios.get(URL_BASE + url)
    }
    static call_post(url, header, data){
        return axios.post(
            URL_BASE + url, {
            headers: header,
            auth: {},
            data: data
        } )
    }
    static create(screenName, password){
        this.call_post('account/create', null,
            {
                'screen-name': screenName,
                'password': password
            }
        );
    }
}