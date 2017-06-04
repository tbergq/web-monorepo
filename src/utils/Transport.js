class Transport {

  baseUrl;
  token;

  constructor() {
    this.baseUrl = 'https://tv-helper-backend.herokuapp.com/api';
    let token = localStorage.getItem('token');
    if (token) {
      this.token = token;
    }
  }

  async call(url, params) {
    if (!params) {
      params = {};
    }
    if (!params.headers) {
      params.headers = {};
    }
    if (typeof params.headers['Content-Type'] === 'undefined') {
      params.headers['Content-Type'] = 'application/json';
    }
    if (this.token) {
      params.headers['Authorization'] = `Bearer ${this.token}`;
    }
    if (params.body && typeof params.body !== 'string') {
      params.body = JSON.stringify(params.body);
    }
    try {
      let response = await fetch(`${this.baseUrl}/${url}`, params);

      if (response.status === 204) {
        return null;
      }
      if (!response.ok) {
        throw new Error(response);
      }
      let json = await response.json();

      return json;
    }
    catch (err) {
      throw err;
    }
  }

  clearToken() {
    localStorage.removeItem('token');
    this.token = null;
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  isLoggedIn() {
    return this.token;
  }
}

const transport = new Transport();

export default transport;