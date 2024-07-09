import * as request from '../lib/request'

const baseUrl = 'https://api-4cmncgehba-ew.a.run.app/data/photoComments';


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

    return result;
}