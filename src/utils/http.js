
import {ToastMessage} from './toast'
import Global from '../utils/global'

/**
 * fetchRequest超时处理封装
 * 让fetch也可以timeout
 *  timeout不是请求连接超时的含义，它表示请求的response时间，包括请求的连接、服务器处理及服务器响应回来的时间
 * fetch的timeout即使超时发生了，本次请求也不会被abort丢弃掉，它在后台仍然会发送到服务器端，只是本次请求的响应内容被丢弃而已
 * @param {Promise} fetch_promise    fetch请求返回的Promise
 * @param {number} [timeout=10000]   单位：毫秒，这里设置默认超时时间为10秒
 * @return 返回Promise
 */
const _fetch = (fetch_promise, timeout=30000) => {
  let abort_fn = null;
  // 这是一个可以被reject的promise
  const abort_promise = new Promise((resolve, reject) => {
		abort_fn = () => {
      const err = new Error('timeout');
		  reject(err);
		}
  });
		// 这里使用Promise.race,以最快resolve或reject的结果来传入后续绑定的回调
	const abortable_promise = Promise.race([fetch_promise,abort_promise]);
  setTimeout(()=>{
		abort_fn()
  }, timeout)
	return abortable_promise;

};

const post = (params) => {
  const {url, successMsg} = params
  let body = params.body
  console.log('%c HTTP Request', 'color:blue')
  console.log(`%c request url ${url}`, 'color:green')
  if (!body) {body = {}}
  body.deviceId = global.UDID
  body.platform = global.platform

	const jsonBody = JSON.stringify(body)
	console.log(`%c Request params ${jsonBody}`,'color:green');

	const myFetch = fetch(url,{
		method: 'post',
		headers:{
			"Accept": "application/json",
			"Content-Type" : "application/json"
		},
		body:jsonBody,
  })
	return new Promise((resolve, reject) => {
    _fetch(myFetch, 30000)
  	  .then(response => {
    		return response.json();
  	  })
  	  .then(responseData=>{
  	  	console.log('%c responseData is ','color:green', responseData);
  	  	/* 虽然后台返回的数据正确的收到了，但是这里需要具体的判断成功还是失败，例如以code为标志 code = 200 表示成功*/
  	  	if (responseData.code == '200') {
	  	  	if (successMsg) {
						ToastMessage(successMsg);
	  	  	};
	  	  	resolve(responseData)
  	  	}else{
  	  		if (responseData && responseData.message) {
  	  			ToastMessage(responseData.message)
  	  		}
  	  		reject(responseData)
  	  	}
  	  })
  	  .catch(error=>{
        console.log("----http error",error.message);
        if (error.message === 'timeout') {
          ToastMessage('网络超时');
        }else{
    	  	ToastMessage('网络错误？');
        }
  	  	reject(error);
  	  });
	});
}

//export default post

const get = (params) =>{
	const {url,successMsg} = params
	const myFetch = fetch(url,{
		method: 'get',
		headers:{
			"Accept": "application/json",
			"Content-Type": "application/json",
		}
	})

    return new Promise((resolve, reject) => {
        _fetch(myFetch, 30000)
            .then(response => {
                if (response.ok){
                    return response.json();
                }else{
                    reject({status: response.status})
                }

            })
            .then(responseData=>{
                console.log('%c responseData is ','color:green', responseData);
				/* 虽然后台返回的数据正确的收到了，但是这里需要具体的判断成功还是失败，例如以code为标志 code = 200 表示成功*/
                // if (responseData.code == '200') {
                //     if (successMsg) {
                //         ToastMessage(successMsg);
                //     };
                //     resolve(responseData)
                // }else{
                //     if (responseData && responseData.message) {
                //         ToastMessage(responseData.message)
                //     }
                //     reject(responseData)
                // }
                    resolve(responseData)
            })
            .catch(error=>{
                console.log("----http error",error.message);
                if (error.message === 'timeout') {
                    ToastMessage('网络超时');
                }else{
                    ToastMessage('网络错误？');
                }
                reject(error);
            });
    });
}

export default get



