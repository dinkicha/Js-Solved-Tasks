import { checkLoginState, hideSelections } from "./utils.js";

export function showHomePage() {
    hideSelections();
    document.getElementById('home-page').style.display = 'block';
    checkLoginState();
    loadMovies();
}

async function loadMovies() {
    const url = 'http://localhost:3030/data/movies';
    const response = await fetch(url);
    const data = await response.json();
}

