<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入账号">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password" style="margin-bottom: 0">
      <el-input
        v-model="loginForm.password"
        type="password"
        placeholder="请输入密码"
        show-password
        autocomplete="new-password"
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round size="large" @click="resetForm"> 重置</el-button>
    <el-button :icon="UserFilled" round size="large" type="primary" :loading="loading" @click="login"> 登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { HOME_URL } from '@/config'
import { getTimeState } from '@/utils'
import { loginApi } from '@/api/modules/login'
import { useUserStore } from '@/stores/modules/user'
import { useTabsStore } from '@/stores/modules/tabs'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'
import { CircleClose, Lock, User, UserFilled } from '@element-plus/icons-vue'
import { initDynamicRouter } from '@/router/modules/dynamicRouter'
import { onMounted, reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'

const router = useRouter()
const userStore = useUserStore()
const tabsStore = useTabsStore()
const keepAliveStore = useKeepAliveStore()

const loginFormRef = ref()
const loginRules = reactive({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const loading = ref(false)
const loginForm = reactive({
  username: 'admin',
  password: '111111'
})

// login
const login = () => {
  if (!loginFormRef.value) {
    return
  }
  loginFormRef.value.validate(async (valid: boolean) => {
    if (!valid) {
      return
    }

    loading.value = true
    try {
      // 1.执行登录接口
      const { data } = await loginApi({ ...loginForm })
      userStore.setToken(data.accessToken)
      userStore.setUserInfo(data.userInfo)

      // 2.添加动态路由
      await initDynamicRouter()

      // 3.清空tabs、keepAlive数据
      tabsStore.closeMultipleTab
      keepAliveStore.setKeepAliveName()

      // 4.跳转到首页
      router.push(HOME_URL)
      ElNotification({
        title: getTimeState(),
        message: '欢迎登录',
        type: 'success',
        duration: 3000
      })
    } finally {
      loading.value = false
    }
  })
}

// resetForm
const resetForm = () => {
  if (!loginFormRef.value) return
  loginFormRef.value.resetFields()
}

onMounted(() => {
  // 监听 enter 事件（调用登录）
  document.onkeydown = (e: KeyboardEvent) => {
    e = (window.event as KeyboardEvent) || e
    if (e.code === 'Enter' || e.code === 'enter' || e.code === 'NumpadEnter') {
      if (loading.value) return
      login()
    }
  }
})

</script>

<style scoped>
@import '../index.scss';
</style>
