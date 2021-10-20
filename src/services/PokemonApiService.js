import axios from 'axios';

/* TODO Edge cases:
    -m/-f or -male/-female: Replace by gender symbol
    Different forms (one card per form?)
    Megas (standard and also pokes with X/Y forms)
    Alolan
    Galar
    Gigamax
  */

function getBestImage(sprites) {
  if (!sprites) {
    return '';
  }

  return sprites.other?.dream_world?.front_default
  || sprites.other?.['official-artwork'].front_default
  || sprites.front_default;
}

function getFormattedName(name) {
  return name[0].toUpperCase() + name.slice(1);
}

async function getPokemon(index) {
  const service = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
  });

  const pokemon = await service.get(`/${index}`)
    .then((result) => {
      const rawData = result.data;

      const validData = {
        image: getBestImage(rawData.sprites),
        name: getFormattedName(rawData.name),
      };

      if (!validData.name || !validData.image) {
        throw new Error();
      }

      return validData;
    }).catch(() => {
      console.error('Failed to get data from the API.');
    });

  return pokemon;
}

export default {
  getPokemon,
};
