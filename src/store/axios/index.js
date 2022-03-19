import axios from 'axios';
import { isObject } from 'lodash';

axios.interceptors.request.use(

    config => config,

    error => {
        undefined

        Promise.reject(error);

    },

);

/* eslint consistent-return: off */

// respone拦截器

axios.interceptors.response.use(

    response => {
        undefined

        //看网上文章，这里可以根据response的状态码来作区分，比如302跳转登陆页，4xx没权限跳转哪里，但是不知道为什么我拦截出来的status都是200，应该为302啊，大佬说应该是后端设置的？目前还不清楚，暂时先根据有没有返回内容来判断，有时间再研究一下，先mark

        if (!isObject(response.data)) {
            undefined

            window.location.href = xxx ? redirectUrl = ${ encodeURIComponent('xxx') };

        } else {
            undefined

            return response;

        }

    },

    error => Promise.reject(error),

);

export default axios;yan