import { get, post, put, del } from "./api.js";

export async function getAllOranges() {
   return await get('/data/fruits?sortBy=_createdOn%20desc');
    
}

export async function createOranges(orangesData) {
    return await post('/data/fruits', orangesData);
  
}

export async function getOrangesById(id) {
    return await get('/data/fruits/' + id);
    
}

export async function updateOranges(id, orangesData)  {
    return await put('/data/fruits/' + id, orangesData);
    
}

export async function deleteOrangesById(id) {
    return await del('/data/fruits/' + id);
}

// export async function getUserCareer(userId) {
//       return await get(``);
//  }