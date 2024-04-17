"use server";

import { API_URL } from "@utils/constanst";
import axios from "axios";
import { cookies } from "next/headers";

export interface IPeternakInterface {
  status: boolean;
  statusCode: number;
  data: dataPeternak[];
}

export interface dataPeternak {
  address: null | string;
  _id: string;
  uid: string;
  id_peternak: string;
  name: string;
  password: string;
  email: string;
  phone_number: string;
  qr_code: null;
  role: string;
  transactions: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}


export const fetchUserData = async (
  id_admin: string
): Promise<dataPeternak | undefined> => {
  const token = cookies().get("accessToken")?.value;

  try {
    const response = await axios.get(`${API_URL}admins/${id_admin}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const adminData: dataPeternak = response.data.data;
    if (response.status === 200) {
      return adminData;
    }
  } catch (err) {
    console.error(err);
    return;
  }
};
