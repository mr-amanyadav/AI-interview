import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_ML_API_URL,
});

export default api;