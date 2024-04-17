import { DataProvider, HttpError } from "@refinedev/core";
import axios from "axios";
import Cookies from "js-cookie";
import { stringify } from "querystring";

// Error handling with axios interceptors
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  }
);

export const dataProviderUtil = (apiUrl: string): DataProvider => ({
  // required methods
  getList: async ({ resource, pagination }) => {
    const url = `${apiUrl}/${resource}`;

    const { current = 1, pageSize = 10 } = pagination ?? {};

    const query: {
      _start?: number;
      _end?: number;
    } = {
      _start: (current - 1) * pageSize,
      _end: current * pageSize,
    };

    const { data, headers } = await axiosInstance.get(
      `${url}?${stringify(query)}`
    );

    const total = +headers["x-total-count"];
    const resData = data.data;
    return {
      data: resData,
      total,
    };
  },
  create: async ({ resource, variables }) => {
    const url = `${apiUrl}/${resource}`;

    const { data } = await axiosInstance.post(url, variables);

    return {
      data,
    };
  },
  update: async ({ resource, id, variables }) => {
    const url = `${apiUrl}/${resource}/${id}`;

    const { data } = await axiosInstance.patch(url, variables);

    return {
      data,
    };
  },
  deleteOne: async ({ resource, id, variables }) => {
    const url = `${apiUrl}/${resource}/delete/${id}`;

    const { data } = await axiosInstance.delete(url);

    return {
      data,
    };
  },
  getOne: async ({ resource, id }) => {
    const url = `${apiUrl}/${resource}/${id}`;

    const { data } = await axiosInstance.get(url);

    return {
      data,
    };
  },
  getApiUrl: () => apiUrl,
});
