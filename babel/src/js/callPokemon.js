
async function callPokemon (id) {
  let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
  return response = await response.json()
}

export default callPokemon
