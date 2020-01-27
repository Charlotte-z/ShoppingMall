import axios from 'axios'

export function request(config){
    //1.创建axios实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/api/hy',
        timeout:5000
    })

    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })

    return instance(config)
}