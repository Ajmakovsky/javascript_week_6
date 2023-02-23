const fetchPokemon = require('./api')

describe('FetchPokemon', () => {
  it('Fetches the data for charizard', (done) => {
    fetchPokemon('charizard')
    .then((pokemon) => {
      expect(pokemon.name).toEqual('charizard')
      expect(pokemon.id).toEqual(6)
      done()
    })
  })
})