import propertiesReader from "properties-reader";
import path from "path";
import { APIRequestContext } from "@playwright/test";
import { Endpoints } from "./enum";

const properties = propertiesReader(path.resolve(__dirname, "./config.properties"));

export const baseUrl: string = properties.get("baseUrl") as string;

export const createUser = async (request: APIRequestContext, data: any) => {
  return await request.post(`${baseUrl}${Endpoints.USERS}`, { data });
};

export const getUser = async (request: APIRequestContext, id: string) => {
  return await request.get(`${baseUrl}${Endpoints.USERS}/${id}`);
};

export const updateUser = async (request: APIRequestContext, id: string, data: any) => {
  return await request.put(`${baseUrl}${Endpoints.USERS}/${id}`, { data });
};

export const deleteUser = async (request: APIRequestContext, id: string) => {
  return await request.delete(`${baseUrl}${Endpoints.USERS}/${id}`);
};