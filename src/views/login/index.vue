<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <SwitchDark class="dark"/>
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login_left3.png" alt="login"/>
      </div>
      <div class="login-form">
        <div class="login-logo">
          <h2 class="logo-text">Blog-Admin</h2>
        </div>
        <LoginForm/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwitchDark from '@/components/SwitchDark/index.vue';
import LoginForm from "@/views/login/components/LoginForm.vue";
</script>

<style scoped>
@import './index.scss';
</style>
