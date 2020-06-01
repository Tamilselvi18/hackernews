import axios from 'axios';

const url = 'https://hn.algolia.com/api/v1/search?query=...';
class ServerCall {
  static getHackerNewsData() {
    return axios.get(url);
  }
}

export default ServerCall;
