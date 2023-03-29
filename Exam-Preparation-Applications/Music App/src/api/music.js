import { get, post, put, del } from "./api.js";

export async function getAllMusic() {
   return await get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
    
}

export async function createMusic(musicData) {
    return await post('/data/albums', musicData);
  
}

export async function getMusicById(id) {
    return await get('/data/albums/' + id);
    
}

export async function updateMusicById(id, musicData)  {
    return await put('/data/albums/' + id, musicData);
    
}

export async function deleteMusicById(id) {
    return await del('/data/albums/' + id);
}

// export async function getUserGames(userId) {
//       return await get(``);
//  }