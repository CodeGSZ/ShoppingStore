// home的网络请求封装
import { request } from "./request";

export function getHomeMultidata () {
    return request ({
        url: '/home/multidata'
    })
}

// 请求精选、流行的数据
export function getHomeGoods (type, page) {
    return request ({
        url: '/home/data',
        paramps: {
            type,
            page
        }
    })
}