<template>
  <div class="footer flx-center">
    <a href="https://szadmin.cn" target="_blank">
      Blog-Admin v{{ version }} | Copyright © 2022-{{ new Date().getFullYear() }}
    </a>
  </div>
</template>
<script setup lang="ts">
import pkg from 'package.json';
const version: string = pkg.version;
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
