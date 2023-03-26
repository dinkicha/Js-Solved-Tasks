import { get, post, put, del } from "./api.js";

export async function getAllGames() {
   return await get('/data/games?sortBy=_createdOn%20desc&distinct=category');
    
}

export async function createGames(gameData) {
    return await post('/data/games', gameData);
  
}

export async function getGamesById(id) {
    return await get('/data/games/' + id);
    
}

export async function updateGamesById(id, gameData)  {
    return await put('/data/games/' + id, gameData);
    
}

export async function deleteGamesById(id) {
    return await del('/data/games/' + id);
}

// export async function getUserGames(userId) {
//       return await get(``);
//  }