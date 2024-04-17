import axios from "axios";
import Cookies from "js-cookie";

const API_URL: string = process.env.API_URL ?? "";
// Buat instance Axios
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000, // timeout opsional
});

// Interceptor untuk menambahkan accessToken ke dalam setiap request
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk menangani response error 401 (Unauthorized)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get("refreshToken");
      // Logic untuk pembaruan accessToken dan refreshToken
      try {
        const response = await axios.post(API_URL + "admins/refresh-token", {
          refreshToken: refreshToken,
        });
        const newAccessToken = response.data.data.accessToken;
        Cookies.set("accessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        // Handle error saat pembaruan token
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance