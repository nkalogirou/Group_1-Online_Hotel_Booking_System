// src/apiClient.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // 👈 IMPORTANT: 3000, no /api
  // If you ever change the backend port, update this too.
});

export default api;
