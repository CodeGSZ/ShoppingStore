// 设置网络请求文件（总）
import axios from 'axios';

export function request (config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.设置axios的拦截（请求拦截: request）
    instance.interceptors.request.use ((config) => {
        // 请求成功的代码，拦截成功以后记得返回数据
        return config
    }, err => {
        // 请求失败的代码
    })

    // 2.2 响应成功的拦截(response)
    instance.interceptors.response.use ((res) => {
        // 请求成功之后记得返回数据，一般请求成功以后只需要返回data
        return res.data
    }, err => {
        // 请求失败的代码
    })

    // 3.发送真正的网络请求
    return instance (config)
}