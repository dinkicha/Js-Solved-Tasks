import { get, post, put, del } from "./api.js";

export async function getAllPets() {
    let pets = await get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
    return pets;
}

export async function createPet(petData) {
    let newPet = await post('/data/pets', petData);
    return newPet;
}

export async function getPetById(id) {
    let pet = await get('/data/pets/' + id);
    return pet;
}

export async function deletePetById(id) {
    return await del('/data/pets/' + id);
    
}

export async function updatePetById(id, petData) {
    let updatedPet =  await put('/data/pets/' + id, petData);
    return updatedPet;
}