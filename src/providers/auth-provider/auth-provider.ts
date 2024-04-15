"use client";

import { AuthBindings } from "@refinedev/core";
import axios from "axios";

import { API_URL } from "@utils/constanst";
import { log } from "console";
import Cookies from "js-cookie";

export const authProvider: AuthBindings = {
  login: async ({ userId, password, remember }) => {
    // Suppose we actually send a request to the back end here.
    let user: string | undefined = undefined;
    let responseStatus = "";
    let id_admin = userId;
    const data = { id_admin, password };
    try {
      const response = await axios.post(`${API_URL}admins/login`, data);
      user = userId;
      // if(response.status === 200) {
      // const response = await axios.get(`${API_URL}admins/${}`, data);
      // }

      responseStatus = response.status.toString();
    } catch (error) {
      console.error(error);
    }

    if (user !== undefined) {
      Cookies.set("auth", JSON.stringify(user), {
        expires: 30, // 30 days
        path: "/",
      });
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        name: "id admin atau password salah",
        message: "Gagal",
      },
    };
  },
  logout: async () => {
    Cookies.remove("auth", { path: "/" });
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser.roles;
    }
    return null;
  },
  getIdentity: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      // console.log(auth);
      return auth;
    }
    return null;
  },
  onError: async (error) => {
    if (error.response?.status === 401) {
      return {
        logout: true,
      };
    }

    return { error };
  },
};
