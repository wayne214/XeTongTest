// export default function post (params){
// 	const {url} = params;
// 	console.log('%c HTTP Request','color:blue');
// 	console.log(`%c request url ${url}`,'color:green');
// 	console.log(`%c Request params ${params.phoneNum}`,'color:green');
// 	delete params.url;
// 	let body = JSON.stringify(params)
// 	console.log("body ==== ",body);
// 	return new Promise((resolve, reject) => {
// 	  fetch(url,{
// 	  	method: 'post',
// 	  	headers:{
// 	  		"Accept": "application/json",
// 	  		"Content-Type" : "application/json"
// 	  	},
// 	  	timeout: 3000,
// 	  	body,
// 	  })
// 	  	.then((response) => response.json())
// 	    .then((responseData) => {
// 	      console.log('%c responseData is ','color:green', responseData);
// 	    	resolve(responseData);
// 	    })
// 	    .catch((error) => {
// 	      reject(error);
// 	    });
// 	});
// }


// import {ToastMessage} from '../utils/toast'
import Toast from '@remobile/react-native-toast';
import Global from '../utils/global'
import Storage from './storage';
import * as RouteType from '../constants/routeType';
import LoginContainer from '../containers/mine/login';
import JPushModule from 'jpush-react-native';
import resetToLoginEmit from '../containers/home/receiveRestToLogin'

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

const imageHeaders = {
    "Content-Type": "multipart/form-data",
};

const _fetch = (fetch_promise, timeout = 30000) => {
    let abort_fn = null;
    const abort_promise = new Promise((resolve, reject) => {
        abort_fn = () => {
            const err = new Error('timeout');
            reject(err);
        }
    });
    // 接收一个数组，只要该数组中的 Promise 对象的状态发生变化（无论是 resolve 还是 reject）该方法都会返回
    const abortable_promise = Promise.race([fetch_promise, abort_promise]);
    setTimeout(() => {
        abort_fn()
    }, timeout);
    return abortable_promise;

};

const post = (params) => {
    const {url, successMsg} = params;
    let body = params.body;
    let navigator=params.navigator;
    console.log('%c HTTP Request', 'color:blue');
    console.log(`%c request url ${url}`, 'color:green');
    if (!body) {
        body = {}
    }

    console.log('global.token===1', global.token)
    if (global.token) {
        headers.Authorization = `Bearer ${global.token}`;
        headers.DeviceId = global.UDID;
        headers.PhoneNum = global.phone;
    }


    //body.deviceId = global.UDID
    //body.platform = global.platform


    const jsonBody = JSON.stringify(body);
    console.log(`%c Request params ${jsonBody}`, 'color:green');

    const myFetch = fetch(url, {
        method: 'post',
        headers,
        body: jsonBody,
    });
    return new Promise((resolve, reject) => {
        _fetch(myFetch, 30000)
            .then(response => {
                console.log('response.headers', response.headers.get('newtoken'))
                if (response.headers.get('newtoken')) {
                    console.log('response.header.newtoken')
                    global.token = response.headers.get('newtoken');
                    Storage.save('token', response.headers.get('newtoken'));
                }

                return response.json();
            })
            .then(responseData => {
                console.log('%c responseData is ', 'color:green', responseData);
                /* 虽然后台返回的数据正确的收到了，但是这里需要具体的判断成功还是失败，例如以code为标志 code = 200 表示成功*/
                if (responseData.code == '200') {
                    if (successMsg) {
                        Toast.showShortCenter(successMsg);
                    };
                    resolve(responseData)
                } else {

                    if (responseData.status == '404' && responseData.path == '/errorAuth') {
                        Storage.save('token', '');
                        global.token = '';
                        Storage.remove('userInfo');
                        Storage.remove('setCarSuccessFlag');
                        Storage.remove('plateNumber');
                        JPushModule.setAlias('', this.success, this.fail);
                        resetToLoginEmit.restToLogin();
                    } else {
                        if (responseData && responseData.message) {
                            Toast.showShortCenter(responseData.message)
                        }
                        reject(responseData)
                    }

                }
            })
            .catch(error => {
                console.log("----http error", error.message);
                if (error.message === 'timeout') {
                    Toast.showShortCenter('网络超时');
                } else {
                    Toast.showShortCenter('网络异常');
                }
                reject(error);
            });
    });
};

export default post;



