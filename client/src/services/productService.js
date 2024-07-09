import * as request from "../lib/request";

const baseUrl = "https://api-4cmncgehba-ew.a.run.app/data/products";

export const addProduct = async (productName, productBrand, productImageUrl, productDescription, productPrice) => {
  const result = await request.post(`${baseUrl}`, {
    productName,
    productBrand, 
    productImageUrl, 
    productDescription, 
    productPrice
  });
  return result;
};

export const getAllProducts = async () => {
  const result = await request.get(`${baseUrl}`);

  return result;
};
export const getOneProduct = async photoId => {
  const result = await request.get(`${baseUrl}/${photoId}`);

  return result;
};
export const updateProduct = async (photoId, photoData) => {
  const result = await request.put(`${baseUrl}/${photoId}`, photoData);

  return result;
};
export const deleteProduct = async photoId => {
  await request.remove(`${baseUrl}/${photoId}`);
};