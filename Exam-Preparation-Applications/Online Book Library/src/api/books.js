import { get, post, put, del } from "./api.js";

export async function getAllBooks() {
   return await get('/data/books?sortBy=_createdOn%20desc');
    
}

export async function createBooks(booksData) {
    return await post('/data/books', booksData);
  
}

export async function getBooksById(id) {
    return await get('/data/books/' + id);
    
}

export async function updateBooksById(id, booksData)  {
    return await put('/data/books/' + id, booksData);
    
}

export async function deleteBooksById(id) {
    return await del('/data/books/' + id);
}

export async function getUserBooks(userId) {
    return await get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}


