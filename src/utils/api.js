import { API_HOST } from '../constants'


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

export function callApi( method, path, body,  cb) {
    //dispatch(setLoading(true));
     //dispatch(setError(null));
   
     //let state = getState();
   
     let headers = {
       Accept: 'application/json, text/plain, */*',
     };
   
     //if (state.token.value) {
     //  headers['Authorization'] = 'Token ' + state.token.value;
    // }
   
     if (body) {
       headers['Content-Type'] = 'application/json';
     }
   
     return fetch(API_HOST + path, {
       method: method,
       credentials : "include",
       headers: headers,
       body: body ? JSON.stringify(body) : null,
     }).then(response => response.json())
       .then((json) => {
         let code = getCode(json);
         let message = getMessage(json);
         if ((code !== 200) && (code !== 201)) {
           return fail( message, cb);
         }
         return success( json, cb);
       }, (error) => {
         return fail( error, cb);
       });
   }
   