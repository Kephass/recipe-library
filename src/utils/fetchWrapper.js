export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

function get(url) {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
  };
  return fetch(url, requestOptions).then(handleResponse);
}

/* ----NOTE----
  The handleResponse() helper function parses the response body text into 
  a JSON object, it uses the response.text() method instead of response.json() 
  to prevent an error if the response body is empty.
  
  The handleResponse() helper function also throws an error if the HTTP 
  response is not successful (!response.ok), the native fetch() function will 
  throw an error for network errors but not for HTTP errors such as 4xx or 5xx responses. 
  For HTTP errors we can check the response.ok property to see if the request failed 
  and reject the promise ourselves by calling return Promise.reject(error);. 
  This approach means that both types of failed requests - network errors and http errors 
  - can be handled by a single catch() block.
  */

// helper functions

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || 'Something went wrong :(';
      return Promise.reject(error);
    }

    return data;
  });
}
