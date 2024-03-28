function getData(url, errorMessage) {
  return fetch(url)
  .then((response)=> {
    if (!response.ok) {
      throw new Error(`Error: ${errorMessage}`)
    }
    return response.json();
  })
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'ошибка при получении объекта покемона')
.then(pokemon => {
  return getData(pokemon.abilities[0].ability.url, 'ошибка при получении ability')
})
.then(ability => {
  console.log(ability.effect_entries[1].effect);
})
.catch(error => {
  console.log(error)
});