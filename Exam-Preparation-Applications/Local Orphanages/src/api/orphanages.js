import { get, post, put, del } from "./api.js";

export async function getAllOrphanages() {
    let orphanages = await get('/data/posts?sortBy=_createdOn%20desc');
    return orphanages;
}

export async function createOrphanages(orphanages) {
    let newOrphanages = await post('/data/posts', orphanages);
    return newOrphanages;
}

export async function getOrpanagesById(id) {
    let orphanages = await get('/data/posts/' + id);
    return orphanages;
}

export async function deleteOrphanagesById(id) {
    return await del('/data/posts/' + id);
    
}

export async function updateOrphanagesById(id, orphanagesData) {
    let updatedOrphanage =  await put('/data/posts/' + id, orphanagesData);
    return updatedOrphanage;
}

export async function getUserOrphanages(userId) {
    return await get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}