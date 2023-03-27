import { get, post, put, del } from "./api.js";

export async function getAllMemes() {
   return await get('/data/memes?sortBy=_createdOn%20desc');
    
}

export async function createMemes(memesData) {
    return await post('/data/memes', memesData);
  
}

export async function getMemesById(id) {
    return await get('/data/memes/' + id);
    
}

export async function updateMemesById(id, memesData)  {
    return await put('/data/memes/' + id, memesData);
    
}

export async function deleteMemesById(id) {
    return await del('/data/memes/' + id);
}

 export async function getUserMemes(userId) {
       return await get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
  }