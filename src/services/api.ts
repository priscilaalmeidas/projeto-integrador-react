import axios from "axios";

const api = axios.create({
  baseURL: "https://api-projeto-integrador.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
