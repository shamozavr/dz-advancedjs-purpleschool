const dataRequest = new XMLHttpRequest();
dataRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
dataRequest.send();

dataRequest.addEventListener('load', function() {
  const data = JSON.parse(this.responseText);
  const abilities = data.abilities;
  const firstAbility = abilities[0].ability;

  const abilityRequest = new XMLHttpRequest();
  abilityRequest.open('GET', firstAbility.url)
  abilityRequest.send();

  abilityRequest.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    const effect = data.effect_entries[1].effect;
    console.log(`effect: ${effect}`);
  });
});