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
      cookieStore.set("accessToken", accessToken);
      cookieStore.set("refreshToken", refreshToken);
      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};
