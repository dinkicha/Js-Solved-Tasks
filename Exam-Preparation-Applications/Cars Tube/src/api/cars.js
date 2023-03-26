import { get, post, put, del } from "./api.js";

export async function getAllCars() {
   return await get('/data/cars?sortBy=_createdOn%20desc');
    
}

export async function createCars(carsData) {
    return await post('/data/cars', carsData);
  
}

export async function getCarsById(id) {
    return await get('/data/cars/' + id);
    
}

export async function getCarsByYear(query) {
    return await get(`/data/cars?where=year%3D${query}`);
    
}

export async function updateCarsById(id, carsData)  {
    return await put('/data/cars/' + id, carsData);
    
}

export async function deleteCarsById(id) {
    return await del('/data/cars/' + id);
}

 export async function getUserCars(userId) {
     return await get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
 }