"use server";
import { API_URL } from "@utils/constanst";
import axios from "axios";
import { log } from "console";
import { cookies } from "next/headers";

export const loginRequest = async (id_admin: string, password: string) => {
  const cookieStore = cookies();

  try {
    const response = await axios.post(`${API_URL}admins/login`, {
      id_admin,
      password,
    });
    const accessToken = response.data.data.accesToken;
    const refreshToken = response.data.data.refreshToken;
    if (response.status === 200) {
      cookieStore.set("accessToken", accessToken, {
        expires: 1, // 1 days
        path: "/",
      });
      cookieStore.set("refreshToken", refreshToken, {
        expires: 30, // 30 days
        path: "/",
      });
      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};
