const fetchpokemon = require("./api");

class Pokedex {
  constructor() {
    this.pokemon = [];
  }

  catchPokemon = async (poke) => {
    let newpokemon = await fetchpokemon(poke);
    this.pokemon.push(newpokemon.name);
  };

  allPokemon = () => {
    return this.pokemon;
  };
}

module.exports = Pokedex;

// const pokedex = new Pokedex();
// pokedex.catchPokemon("pikachu");
