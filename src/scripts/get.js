export async function get(url, ...params) {
    let paramsArr = ['?']
    params.forEach(e => {paramsArr.push(e); paramsArr.push('&')})
    let fetchUrl
    if (paramsArr.length > 1) fetchUrl = `${url}${paramsArr.join('')}`; else fetchUrl = `${url}`
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data
}