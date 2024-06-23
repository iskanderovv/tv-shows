import axios from "axios";

const axiosBase = axios.create({
    baseURL: "https://api.tvmaze.com",
    timeout: 10000
})

export default axiosBase;