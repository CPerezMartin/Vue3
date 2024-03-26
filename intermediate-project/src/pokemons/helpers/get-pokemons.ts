import axios from 'axios'
import pokemonApi from '../api/pokemonApi'

import type { PokemonListResponse } from '../interfaces/pokemon-list.response'
import type { Pokemon } from '../interfaces/pokemon'
import type { PokemonResponse } from '../interfaces/pokemon.response'

export const getPokemons = async (): Promise<Pokemon[]> => {
  const { data: pokemonListData } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')

  const pokemonPromises = pokemonListData.results.map(({ url }) => {
    return axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
      }
    })
  })

  // Versión de la lógica sin usar .map
  // const pokemonPromises: Promise<Pokemon>[] = [];
  // for (const { url } of pokemonListData.results) {
  //   const pokemonPromise = axios.get<PokemonResponse>(url)
  //     .then(( { data }) => {
  //       return {
  //         id: data.id,
  //         name: data.name,
  //         frontSprite: data.sprites.front_default,
  //       }
  //     });
  //   pokemonPromises.push(pokemonPromise);
  // }

  // Versión de la lógica sin axios
  // const pokemonPromises = pokemonListData.results.map(({ url }) => {
  //   return fetch(url)
  //     .then(response => response.json())
  //     .then((data: PokemonResponse) => {
  //       return {
  //         id: data.id,
  //         name: data.name,
  //         frontSprite: data.sprites.front_default,
  //       };
  //     });
  // });

  return await Promise.all(pokemonPromises)
}
