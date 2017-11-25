const HOST ='Http://localhost:3001';
export function get(url) {
    return fetch(HOST+url,{
        method:'get',
        credentials:"include",
        headers:{
            "Accept":"application/json"
        }
    }).then(res=>res.json());
}

export function post(url,data) {
    return fetch(HOST+url,{
        method:"POST",
        credentials:"include",
        headers:{
            "Accept":'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res=>res.json());
}

export function del(url,data) {
    return fetch(HOST+url,{
        method:"DELETE",
        credentials:"include",
        headers:{
            "Accept":'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res=>res.json());
}