const base = process.env.REACT_APP_API_URL
const fetchSinToken = (endpoint, data, method = 'GET') => {
    const url = `${base}/${endpoint}`;

    if (method === 'GET'){
        return fetch(url);
    }else {
        return fetch(url, {
            method,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
    }
}


const fetchConToken = (endpoint, data, method = 'GET') => {
    const url = `${base}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    if (method === 'GET'){
        return fetch(url,{
            method,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }else {
        return fetch(url, {
            method,
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
    }
}

//GET
//const resp = await fetchConToken(`producto/`);
//const body = await resp.json();


//PUT
//const resProduct = await fetchConToken(`producto/${product?.id}`,product,'PUT');
//const resStock = await fetchConToken(`stock/${stock?.id}`,stock,'PUT');

//POST
// const resp = await fetchConToken('producto/', product, 'POST');
// const body = await resp.json();


export {
    fetchSinToken,
    fetchConToken
}