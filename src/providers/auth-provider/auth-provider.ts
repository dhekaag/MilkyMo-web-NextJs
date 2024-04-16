"use client";

import { AuthBindings } from "@refinedev/core";
import axios from "axios";

import Cookies from "js-cookie";
import { loginRequest } from "./login-provider.server";

export const authProvider: AuthBindings = {
  login: async ({ userId, password, remember }) => {
    // Suppose we actually send a request to the back end here.
    let user: string | undefined = undefined;
    // let responseStatus = "";
    // let id_admin = userId;
    // const data = { id_admin, password };
    try {
      const res = await loginRequest(userId, password);
      if (res) {
        user = userId;
      }
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
