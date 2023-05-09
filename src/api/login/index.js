import request from '@/utils/request'

//登录获取token
// 密码登录方法
export function passwordLogin(username, password) {
    const data = {
        username,
        password,
    }
    return request({
        url: '/login/mobile',
        headers: {
            isToken: false
        },
        method: 'post',
        data: data
    })
}