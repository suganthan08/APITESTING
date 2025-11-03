import { apiClient } from './apiClient';

export const apiMethods = {
  get: async (endpoint: string) => await apiClient.get(endpoint),
  post: async (endpoint: string, data: any) => await apiClient.post(endpoint, data),
  put: async (endpoint: string, data: any) => await apiClient.put(endpoint, data),
  delete: async (endpoint: string) => await apiClient.delete(endpoint)
};
