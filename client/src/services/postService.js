import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data";



export const addPhoto = async(imageUrl, caption, ownerName) => {
    const result = await request.post(`${baseUrl}/photos`, {
        imageUrl,
        caption,
        ownerName,
    });
    console.log(result)
    return result;
}

export const getAllPhotos = async() => {
    const result = await request.get(`${baseUrl}/photos`);

    return result;
}
export const getOnePhotos = async(photoId) => {
    const result = await request.get(`${baseUrl}/photos/${photoId}`);

    return result;
}
