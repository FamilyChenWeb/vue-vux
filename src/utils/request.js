import Vue from 'vue'
import axios from 'axios'
import Api from '../api/api'
import { Loading } from 'vux'
Vue.component('loading', Loading)

axios.interceptors.request.use(config => {
  return config
}, err => {
  this.$vux.loading.show({
    text: 'Loading'
  })
  return Promise.resolve(err)
})

axios.interceptors.response.use(data => {
  if (data.status && data.status == 200 && data.data.status == 'error') {
    this.$vux.loading.show({
      text: 'Loading'
    })
    return;
  }
  return data;
}, err => {
  if (err.response.status == 504||err.response.status == 404) {
    this.$vux.loading.show({
      text: 'Loading'
    })
  } else if (err.response.status == 403) {
    this.$vux.loading.show({
      text: 'Loading'
    })
  } else {
    this.$vux.loading.show({
      text: 'Loading'
    })
  }
  return Promise.resolve(err);
})

let base = Api.base;
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  });
}
export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: `${base}${url}`
  });
}
