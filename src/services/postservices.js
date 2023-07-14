import axios from "axios";
const server_url = 'http://localhost:9001';

export const send_post = (data) => {
    const url = `${server_url}/post`
    return axios.post(url, data)
}

export const get_post = () => {
    const url = `${server_url}/post`
    return axios.get(url)

}