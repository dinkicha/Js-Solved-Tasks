import { get, post, put, del } from "./api.js";

export async function getAllCareers() {
   return await get('/data/offers?sortBy=_createdOn%20desc');
    
}

export async function createCareers(careerData) {
    return await post('/data/offers', careerData);
  
}

export async function getCareersById(id) {
    return await get('/data/offers/' + id);
    
}

export async function updateCareersById(id, careerData)  {
    return await put('/data/offers/' + id, careerData);
    
}

export async function deleteCareersById(id) {
    return await del('/data/offers/' + id);
}

export async function getUserCareer(userId) {
      return await get(``);
 }