import {post,get} from './index'
export function fetchRegister(data) {
    return post('/register',data);
}
export function fetchLogin(data) {
    return post('/login',data)
}
export function fetchValidate() {
    return get('/validate')
}

export function fetchLoginout() {
    return get('/loginout')
}

export function fetchUpdatePwd(data) {
    return post('/reset',data)
}