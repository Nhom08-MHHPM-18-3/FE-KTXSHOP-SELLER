import axiosMy from "./axiosMy";

export const accountApi = {
  getAccount: async (params) => {
    const url = `accounts`;
    return await axiosMy.get(url, { params });
  },
};
