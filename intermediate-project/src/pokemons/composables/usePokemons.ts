import { computed } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import { useQuery } from '@tanstack/vue-query'

// const pokemons = ref<Pokemon[]>([])
// const isLoading = ref(true)

export const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error
  } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    retry: 3
  })

  return {
    pokemons,
    isLoading,
    isError,
    error,

    //computed
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
