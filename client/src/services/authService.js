import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
  const result = await request.post(`${baseUrl}/login`, {
    email,
    password
  });

  return result;
};

export const register = (firstName, lastName, email, password, username) => {
  // console.log(firstName)
  // console.log(lastName)
  // console.log(email)
  // console.log(password)
  const res = request.post(`${baseUrl}/register`, {
    firstName,
    lastName,
    username,
    email,
    password,
  });

  return res;

  // console.log(res)
};

export const logout = () => request.get(`${baseUrl}/logout`);
