"use client";
import { PUBLIC_API_URL } from "@utils/constanst";
import { dataProviderUtil } from "./data.provider";

export const dataProvider = dataProviderUtil(PUBLIC_API_URL);
