import { defineStore } from 'pinia'
import { ref } from 'vue'
import mittBus from '@/utils/mittBus'
import { CHANNEL_DEFAULT } from '@/config/consts'

/**
 * 使用socket
 * @param url
 * @returns {{init: (function(): void), socket: null}}
 */
export const useSocketStore = defineStore('socket', () => {
  /**
   * todo 定义socket变量
   *
   * @type {WebSocket|null}
   */
  const socket = ref<WebSocket | null>(null)
  const canReconnect = ref(true)
  const reconnectCount = ref(0)

  const _onOpen = () => {
    canReconnect.value = true
    reconnectCount.value = 0
  }

  // todo
  const _onMessage = (event: MessageEvent) => {

  }

  // todo
  const _onError = (event: Event) => {
    mittBus.emit('socket.error', event)
  }

  // todo
  const _onClose = () => {

  }

  // todo
  const handleReconnect = () => {

  }

  // todo 初始化开启socket
  const open = () => {

  }

  // todo 关闭socket
  const close = () => {
  }

  // todo
  const send = (data: any, channel: string = CHANNEL_DEFAULT) => {

  }

  return { open, send, close }
})
