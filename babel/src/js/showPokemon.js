const showPokemon = (response) => {
  const img = document.createElement('img')
  img.setAttribute('src', response.sprites.front_default)
  document.body.append(img)
};

export default showPokemon;