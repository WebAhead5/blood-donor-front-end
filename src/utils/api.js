import { API_MDA_HOST } from '../constants'
import axios from 'axios';


const apiInstance = axios.create({
    'https://mdaios.org': "token"
})

function getCode(json) {
    return (json.code || (json.header && json.header.code) || 9000);
}

function getMessage(json) {
    return (json.message || (json.header && json.header.message) || 'Unknown error');
}

function fail(message, cb) {
    // dispatch(setLoading(false));
    // if (failureType) {
    //   dispatch(setFailure(failureType, message));
    // }
    // dispatch(setError(message));
    if (cb) {
        cb(message, null);
    }
    return Promise.resolve({ error: message });
}

function success(json, cb) {
    // dispatch(setLoading(false));
    // if (successType) {
    //   dispatch(setSuccess(successType, json))
    // }
    if (cb) {
        cb(null, json);
    }
    return Promise.resolve(json);
}

export function callApi(method, path, body, cb) {
    
    // try {
    //     axios.defaults.headers.common['https://mdaios.org'] = "token"
    // } catch (error) {
    //     console.log(error);
    // }

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //const proxyurl ="";
    let headers = {
        Accept: 'application/json, text/plain, */*',
    };

    if (body) {
        headers['Content-Type'] = 'application/json';
        headers['Set-Cookie'] = 'rbzsessionid=2a9b60db124b2002c01afb275fb854c0; GCLB=CJSY9sTAh7WIhQE; rbzid=vKO6p4RRwJcetxUMitFnGFsCQjg+Xird9XiFxO6b2trYh9d9soQzdB4xitwaXEHMBcWZuh+9GieUrMpU2QQ18kab9f+cvDPKb7YjvFXtoD9Bm8lm4N19w5pYIEbM4baPwNVWjKAUrzmM1mv3vIlwrrG5UhZ73Xg9jRPA6j476jXLN6+wxPYMLAfOcKavSEptbQ0156KaUaH/nLOk9QcfcvH8CpBljK9y3EVxKnku7IHki7D5fzkHO4XM7XGB8SFRMBgQGiIvpvd/TEyy4jVHPA==;';
    }
    document.cookie = 'rbzsessionid=2a9b60db124b2002c01afb275fb854c0';
    //document.cookie = 'rbzsessionid=2a9b60db124b2002c01afb275fb854c0; GCLB=CPjw7JGQ5tmXyAE';

    // axios.interceptors.response.use(response => {
    //     return response;
    // }, err => {
    //     return new Promise((resolve, reject) => {
    //         const originalReq = err.config;
    //         if ( err.response.status === 401 && err.config && !err.config.__isRetryRequest )
    //         {
    //             originalReq._retry = true;

    //             let res = fetch('http://localhost:8080/api/v1/auth/refresh', {
    //                 method: 'POST',
    //                 mode: 'cors',
    //                 cache: 'no-cache',
    //                 credentials: 'same-origin',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Device': 'device',
    //                     'Token': localStorage.getItem("token")
    //                 },
    //                 redirect: 'follow',
    //                 referrer: 'no-referrer',
    //                 body: JSON.stringify({
    //                     token: localStorage.getItem("token"),
    //                     refresh_token: localStorage.getItem("refresh_token")
    //                 }),
    //             }).then(res => res.json()).then(res => {
    //                 console.log(res);
    //                 this.setSession({token: res.token, refresh_token: res.refresh});
    //                 originalReq.headers['Token'] = res.token;
    //                 originalReq.headers['Device'] = "device";


    //                 return axios(originalReq);
    //             });


    //             resolve(res);
    //         }


    //         return Promise.reject(err);
    //     });
    // });

    axios({
        url: proxyurl + API_MDA_HOST + path,
        method: method,
        data: body
    }).then(response => response.json())
        .then((json) => {
            let code = getCode(json);
            let message = getMessage(json);
            if ((code !== 200) && (code !== 201)) {
                return fail(message, cb);
            }
            return success(json, cb);
        }, (error) => {
            return fail(error, cb);
        });
//////////////////////////////////////////////////////////////////////////////////////////////////
    // return fetch(proxyurl + API_MDA_HOST + path, {
    //     method: method,
    //     headers: headers,
    //     credentials: 'include',
    //     body: body ? JSON.stringify(body) : null,
    // }).then(response => response.json())
    //     .then((json) => {
    //         let code = getCode(json);
    //         let message = getMessage(json);
    //         if ((code !== 200) && (code !== 201)) {
    //             return fail(message, cb);
    //         }
    //         return success(json, cb);
    //     }, (error) => {
    //         return fail(error, cb);
    //     });
}