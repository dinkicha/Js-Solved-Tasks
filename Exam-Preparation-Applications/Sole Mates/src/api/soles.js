import { get, post, put, del } from "./api.js";

export async function getAllSoles() {
   return await get('/data/shoes?sortBy=_createdOn%20desc');
    
}

export async function createSoles(soleData) {
    return await post('/data/shoes', soleData);
  
}

export async function getSolesById(id) {
    return await get('/data/shoes/' + id);
    
}

export async function updateSolesById(id, soleData)  {
    return await put('/data/shoes/' + id, soleData);
    
}

export async function deleteSolesById(id) {
    return await del('/data/shoes/' + id);
}

// export async function getUserGames(userId) {
//       return await get(``);
//  }