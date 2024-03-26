<script setup lang="ts">
import PokemonCardList from '../components/PokemonCardList.vue';
import { usePokemons } from '../composables/usePokemons';
const { count, pokemons, isLoading, isError, error } = usePokemons();

</script>

<template>
  <div>
    <h3 v-if="isLoading">Cargando</h3>

    <div v-else-if="isError">{{ error }}</div>
    <div v-else>
      <h1> Pokemons List - {{ count }}</h1>
      <PokemonCardList :pokemons="pokemons ?? []" />
    </div>
  </div>
</template>../interfaces/pokemon-list.response