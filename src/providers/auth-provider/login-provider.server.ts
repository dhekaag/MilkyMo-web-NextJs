"use server";
import { API_URL } from "@utils/constanst";
import axios from "axios";
import { cookies } from "next/headers";
import { setCookie } from "cookies-next";

const oneDay = 24 * 60 * 60 * 1000;
const thirtyDays = 30 * oneDay;
const expireDateAccessToken = new Date(Date.now() + oneDay);
const expireDateRefreshToken = new Date(Date.now() + thirtyDays);

export const loginRequest = async (id_admin: string, password: string) => {
  const cookiesStore = cookies();
  try {
    const response = await axios.post(`${API_URL}admins/login`, {
      id_admin,
      password,
    });
    const accessToken = response.data.data.accesToken;
    const refreshToken = response.data.data.refreshToken;

    if (response.status === 200) {
      cookiesStore.set("accessToken", accessToken, {
        path: "/",
        expires: expireDateAccessToken,
      });
      cookiesStore.set("refreshToken", refreshToken, {
        path: "/",
        expires: expireDateRefreshToken,
      });
      console.log("login fetch success");

      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};
