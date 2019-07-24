import Taro from '@tarojs/taro'

const config = {
  api_base_url: 'https://cnodejs.org/api/v1',
}

class HTTP {
  request({url,data={},method='GET'}){
    return new Promise((resolve, reject)=>{
      this._request(url,resolve,reject,data, method)
    })
  }

  _request(url,resolve,reject,data={},method="GET") {
    Taro.showLoading()
    Taro.request({
      url:config.api_base_url + url,
      method:method,
      data:data,
      header:{
        'content-type':'application/json',
      },
      success:(res)=>{
        const code = res.statusCode.toString()
        if (code.startsWith('2')){
          Taro.hideLoading()
          resolve(res.data)
        }
        else{
          Taro.hideLoading()
          reject()
        }
      },
      fail:(err)=>{
        Taro.hideLoading()
        reject(err)
      }
    })
  }

}

export {HTTP}
