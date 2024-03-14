<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue';
import { routerLinks } from '@/router/list-routes'
</script>

<template>
  <header>
    <NavBar title="PokemonApp" :links="routerLinks"/>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
