import { get, post, put, del } from "./api.js";

export async function getAllTheaters() {
   return await get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
    
}

export async function createTheater(theaterData) {
    return await post('/data/theaters', theaterData);
  
}

export async function getTheaterById(id) {
    return await get('/data/theaters/' + id);
    
}

export async function updateTheaterById(id, theaterData)  {
    return await put('/data/theaters/' + id, theaterData);
    
}

export async function deleteTheaterById(id) {
    return await del('/data/theaters/' + id);
}

export async function getUserTheaters(userId) {
    return await get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}