import {post} from './index'
export function fetchRegister(data) {
    post('/register',data);
}
export function fetchLogin(data) {
    post('/login',data)
}