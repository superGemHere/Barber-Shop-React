import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/data/photoComments';


export const getAll = async(photoId) => {
    const query = new URLSearchParams({
        where: `photoId="${photoId}"`
    })
    const result = await request.get(`${baseUrl}?${query}`);

    return Object.values(result);
}

export const addComent = async(photoId, username, commentInput) => {
    const result = await request.post(baseUrl, {
        photoId,
        username,
        commentInput
    });

    console.log(result);
    return result;
}