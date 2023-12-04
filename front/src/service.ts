import axios from "axios";

export function fetchCars() {
    const server_url = import.meta.env.VITE_SERVER_URL
    console.log("server url" + server_url)
    return axios.get(`${server_url}/api/v1/cars`)
}