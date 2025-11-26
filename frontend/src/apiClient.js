// src/apiClient.js
import axios from "axios";

// 🔵 Point to your backend (change if needed)
const API_BASE_URL = "http://localhost:3000"; 
// or 3000 if your backend uses 3000

// Create Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
