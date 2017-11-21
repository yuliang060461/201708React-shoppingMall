let host='http://localhost:3000';
export default function get(url) {
    return fetch(host+url,{
        method:'GET',
        credentials:'include',
        headers:{
            "Accept":"application/json"
        }
 }).then(res=>res.json())
}