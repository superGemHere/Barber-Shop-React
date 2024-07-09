import * as request from "../lib/request";

const baseUrl = "https://api-4cmncgehba-ew.a.run.app";

export const login = async (email, password) => {
  const result = await request.post(`${baseUrl}/users/login`, {
    email,
    password
  });

  return result;
};

export const register = (firstName, lastName, email, password, username) => {

  const res = request.post(`${baseUrl}/register`, {
    firstName,
    lastName,
    username,
    email,
    password,
  });

  return res;

};

export const logout = () => request.get(`${baseUrl}/logout`);
