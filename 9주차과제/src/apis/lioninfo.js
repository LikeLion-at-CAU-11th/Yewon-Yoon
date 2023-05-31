import axios from "axios";

export const baseUrl = `https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api`;

export const getAllUser = () => {
  const url = `${baseUrl}/user?page=0`;
  return axios.get(url);
};

export const getUserPerPage = (page) => {
  const url = `${baseUrl}/user?page=${page}`;
  return axios.get(url);
};

export const getUserPerGender = (gender) => {
  const url = `${baseUrl}/user?gender=${gender}`;
  return axios.get(url);
};

export const getUserPerStack = (stack) => {
  const url = `${baseUrl}/user?stack=${stack}`;
  return axios.get(url);
};
