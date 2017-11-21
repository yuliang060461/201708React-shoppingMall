
const HOST='http://localhost:3000';
export function post(url,data) {
    return fetch(HOST+url,{
        method:'POST',
        credentials:'include',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json());
}