const Pokedex = require("./pokedex");

describe("Pokedex", () => {
  it("catches the pokemon Pikachu", async () => {
    const pokedex = new Pokedex();
    await pokedex.catchPokemon("pikachu");
    expect(pokedex.allPokemon()).toEqual(['pikachu']);
  });

  it("catches the pokemon Pikachu and charizard", async () => {
    const pokedex = new Pokedex();
    await pokedex.catchPokemon("pikachu");
    await pokedex.catchPokemon("charizard");

    expect(pokedex.allPokemon()).toEqual(['pikachu', 'charizard']);
  });
});
