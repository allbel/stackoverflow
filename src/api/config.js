import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.stackexchange.com/2.3/',
});

export const searchAPI = {
  key: 'L6Q7464YmlAjIL60IqkLpQ((',
  get(query = 'redux') {
    return instance.get(`search/advanced?key=${this.key}&order=desc&sort=activity&q=${query}&filter=withbody&site=stackoverflow`).then(res => res.data)
  }
}