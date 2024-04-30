// Afegeix aquí el codi de JS per a la pàgina pokemon.html
//https://pokeapi.co/api/v2/pokemon/

async function getPokemon(id) {
  try {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(pokemonUrl);
    const data = await res.json();
    console.log(data);
    const character = {
        id: data.id,
        nom: data.name,
        height: data.height,
        weight: data.weight,
        habilities: data.abilities,
        sprites: data.sprites
    }
    console.log(character);
    const divPokemon = document.getElementById('pokemon');
    const namePokemon = document.getElementById('name');
    const heightPokemon = document.getElementById('height');
    const weightPokemon = document.getElementById('weight');
    const imgPokemon = document.getElementById('sprite');
    const abilities = document.getElementById('abilities');
    const ul = document.querySelector('ul');
    const h4 = document.querySelector('h4');

    namePokemon.innerHTML = "Nom del Pokemon: " + character.nom;
    heightPokemon.innerHTML = "Height: "+character.height;
    weightPokemon.innerHTML = "Weight: "+character.weight;
    imgPokemon.src = character.sprites.front_default;
    const abilitats = character.habilities;
    const a = abilitats.map((ability)=>{
        ability.name
    })
    console.log(a);
  } catch (error) {
    console.error(error);
  }
}


getPokemon(12);
