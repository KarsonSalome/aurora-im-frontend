import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosApi.interceptors.request.use(
  async (config) => {
    if (typeof window !== "undefined") {
      const { store } = await import("../redux/store");
      const { auth } = store.getState();
      if (auth?.token) {
        config.headers["authorization"] = auth.token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosApi;
