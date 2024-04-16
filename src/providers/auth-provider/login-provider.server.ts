"use server";
import { API_URL } from "@utils/constanst";
import axios from "axios";

export const loginRequest = async (id_admin: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}admins/login`, {
      id_admin,
      password,
    });
    if (response.status === 200) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};
