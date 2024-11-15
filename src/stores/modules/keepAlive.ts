import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKeepAliveStore = defineStore('keep-alive', () => {
  const keepAliveName = ref<string[]>([]);

  async function addKeepAliveName(name: string) {
    if (!keepAliveName.value.includes(name)) {
      keepAliveName.value.push(name)
    }
  }

  async function removeKeepAliveName(name: string) {
    keepAliveName.value = keepAliveName.value.filter(item => item !== name);
  }

  async function setKeepAliveName(keepAliveNames: string[] = []) {
    keepAliveName.value = keepAliveNames;
  }

  return {
    keepAliveName,
    addKeepAliveName,
    removeKeepAliveName,
    setKeepAliveName
  };
})
