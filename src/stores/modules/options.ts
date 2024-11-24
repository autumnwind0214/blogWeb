import { defineStore } from 'pinia'
import piniaPersistConfig from '@/stores/helper/persist'
import { ref } from 'vue'
import type { IDict } from '@/api/interface/system/dict'
import { getAllDict } from '@/api/modules/system/dict'

export const useOptionsStore = defineStore(
  'options',
  () => {
    const isLoaded = ref(false)
    const dictOptions = ref<Record<string, IDict.DictCustom[]>>({})

    function setReloadOptions() {
      isLoaded.value = false
    }

    async function getAllDictList() {
      if (isLoaded.value) return;
      const { data } = await getAllDict();
      dictOptions.value = data;
      isLoaded.value = true;
    }

    function getDictOptions(type: string) {
      return dictOptions.value[type] || []
    }

    return {
      isLoaded,
      getAllDictList,
      getDictOptions,
      setReloadOptions
    }
  },
  {
    persist: piniaPersistConfig('options')
  }
)
