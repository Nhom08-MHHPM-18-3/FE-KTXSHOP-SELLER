import axiosMy from "./axiosMy";

export const sellerApi = {
  getRevenue: async (params) => {
    const url = `revenues`;
    return await axiosMy.get(url, { params });
  },
  getProducts: async (params) => {
    const url = `products`;
    return await axiosMy.get(url, { params });
  },
  getOrders: async (params) => {
    const url = `orders`;
    return await axiosMy.get(url, { params });
  },
};
