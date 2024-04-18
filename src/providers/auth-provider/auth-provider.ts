"use client";

import { AuthBindings } from "@refinedev/core";
import Cookies from "js-cookie";
import { loginRequest } from "./login-provider.server";
import { dataPeternak, fetchUserData } from "../data-provider/admin-provider";

export const authProvider: AuthBindings = {
  login: async ({ userId, password, remember }) => {
    // Suppose we actually send a request to the back end here.
    let user: dataPeternak | undefined = undefined;
    try {
      const res = await loginRequest(userId, password);
      if (res) {
        const adminData = await fetchUserData(userId);
        user = adminData;
      }
    } catch (error) {
      console.error(error);
    }

    if (user !== undefined) {
      Cookies.set("auth", JSON.stringify(user), {
        expires: 30, // 30 days
        path: "/",
      });
      console.log("login fetch success in auth provider");
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        name: "id admin atau password salah",
        message: "Login gagal",
      },
    };
  },
  logout: async () => {
    Cookies.remove("auth", { path: "/" });
    Cookies.remove("accessToken", { path: "/" });
    Cookies.remove("refreshToken", { path: "/" });
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const auth = Cookies.get("auth");
    const token = Cookies.get("refreshToken");
    if (auth || token) {
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
      const authData: dataPeternak = JSON.parse(auth);
      return authData;
    }
    return null;
  },
  onError: async (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      return {
        logout: true,
      };
    }

    return { error};
  },
};
