<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes';
import NavBar from '@/shared/components/NavBar.vue';
import { RouterView } from 'vue-router';
import { pokemonsRoute } from '../router';
import { Suspense } from 'vue';


// const routeLinks: RouterLink[] = pokemonsRoute.children?.map(({name, path, props }) => {

//   return {
//     name:name?.toString() ?? '',
//     path:path,
//     title:  (props as {title: string}).title,

//   }

// }) || [];
const routeLinks: RouterLink[] = pokemonsRoute.children?.map((link) => {

  return {
    name: link.name?.toString() ?? '',
    path: link.path,
    title: (link.props as { title: string }).title,

  }

}) || [];


</script>

<template>
  <div>
    <NavBar :links='routeLinks' is-secondary />
    <!-- El código comentado corresponde al uso de la característica experimental "suspense" -->
    <!-- <Suspense>  -->
      <RouterView />
      <!-- <template #fallback>
        Loading...
      </template>
    </Suspense> -->
  </div>
</template>