const BASE_URL = ' https://pokeapi.co/api/v2/';

export const get = async (relativeUrl) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    const requestOptions = {
        method: 'GET',
        headers,
        redirect: 'follow'
    };

    return await fetch(BASE_URL + relativeUrl, requestOptions).then((response) => response.json());
}

export const post = async (relativeUrl, body) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    const requestOptions = {
        method: 'POST',
        headers,
        redirect: 'follow',
        body
    };

    return await fetch(BASE_URL + relativeUrl, requestOptions).then(res => res.json());
}