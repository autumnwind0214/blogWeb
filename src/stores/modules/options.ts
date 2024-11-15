import { defineStore } from 'pinia'
import piniaPersistConfig from '@/stores/helper/persist'
import { ref } from 'vue'


export const useOptionsStore = defineStore(
  'options',
  () => {
    const isLoaded = ref(false)

    function setReloadOptions() {
      isLoaded.value = false
    }

    return {
      isLoaded,
      setReloadOptions
    }
  },
  {
    persist: piniaPersistConfig('options')
  }
)
