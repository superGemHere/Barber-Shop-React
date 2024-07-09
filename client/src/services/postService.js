import * as request from "../lib/request";

const baseUrl = "https://api-4cmncgehba-ew.a.run.app/data";

export const addPhoto = async (imageUrl, caption, ownerName) => {
  const result = await request.post(`${baseUrl}/photos`, {
    imageUrl,
    caption,
    ownerName
  });
  return result;
};

export const getAllPhotos = async () => {
  const result = await request.get(`${baseUrl}/photos`);

  return result;
};
export const getOnePhotos = async photoId => {
  const result = await request.get(`${baseUrl}/photos/${photoId}`);

  return result;
};
export const updatePhoto = async (photoId, photoData) => {
  const result = await request.put(`${baseUrl}/photos/${photoId}`, photoData);

  return result;
};
export const deletePhoto = async photoId => {
  await request.remove(`${baseUrl}/photos/${photoId}`);
};
