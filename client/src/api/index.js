import axios from "axios";

// api server
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

export function getPhones() {
    return api.get("/phones");
}