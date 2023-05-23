import axios from 'axios'
const baseURL = process.env.REACT_APP_BASE_URI || "http://stage.whgstage.com/front-end-test/"

console.log({ baseURL })

const Api = axios.create({ baseURL })

Api.interceptors.request.use((config) => config, (error) => {
    return Promise.reject(error)
});


Api.interceptors.response.use((response) => response, (error) => {
    return Promise.reject(error)
})

export default Api;