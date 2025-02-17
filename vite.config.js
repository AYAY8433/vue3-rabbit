import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: true, // 默认值
    __VUE_PROD_DEVTOOLS__: false, // 默认值
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // 显式定义
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
