// Dispaly one pokemon name

// identify our div
const pokemonDiv = document.querySelector(".pokemon");
// create a base url
const POKE_URL = "https://pokeapi.co/api/v2/pokemon/"

// show pokemon name
function printPokemonName(name) {
    let h2 = document.createElement("h2");
        h2.innerHTML = name
        pokemonDiv.append(h2)
}
//show pokemon picture
function displayPokemonPic(picture) {
    let img = document.createElement("img")
    img.src = picture
    pokemonDiv.append(img)
}
// start the fetch
function fetchPokemon(name) {
    fetch(POKE_URL + name)
    //getting the data
        .then(response => response.json())
        //actually doing something with that data
        .then(data => {
            console.log(data);
            printPokemonName(data.name)
            displayPokemonPic(data.sprites.front_default)
        })
}

fetchPokemon("ditto")
fetchPokemon("pikachu")

// display 100 pokemon
function fetch100Pokemon() {
    let pokemon100URL = POKE_URL + "?limit=100"
    fetch(pokemon100URL)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => fetchPokemon(pokemon.name))
    })
}
fetch100Pokemon()