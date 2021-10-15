import pokemon from '../static/example-pokemon.json';

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

function getPokemon() {
  return {
    image: getBestImage(pokemon.sprites),
    name: getFormattedName(pokemon.name),
  };
}

export default {
  getPokemon,
};
