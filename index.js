const swapiNode = require('swapi-node');

const planetsBtn = document.getElementById('planetsId');
const starshipsBtn = document.getElementById('starshipsId');
const moviesBtn = document.getElementById('moviesId');
const previousBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const main = document.getElementById('main');

let planetsURL = 'https://swapi.dev/api/planets/?page=1';
let moviesURL = 'https://swapi.dev/api/movies/?page=1';
let starshipsURL = 'https://swapi.dev/api/starships/?page=1';
let nextPage;
let prevPage;

planetsBtn.addEventListener('click', fetchPlanets);

async function fetchPlanets(){
    const swapi = await fetch(planetsURL);
    const data = await swapi.json();
    let nextPage = data.next;
    let prevPage = data.previous;
    let planets = data.results;
    planets.forEach(item => {
        console.log(item.name)
    })
}

function nextPlanetsPage(){
    if (nextPage){
        planetsURL = new URL(nextPage);
    }
    fetchPlanets()
    .then(response => {
    console.log(`Success: Planets`)
    console.log(planetsURL)
  })
    .catch(error => {
    console.log(`error!`)
    console.error(error)
  });
}

