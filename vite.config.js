import {
  fileURLToPath,
  URL
} from 'node:url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'

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
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //1.配置elementPlus采用sass样式配色系统
      resolvers: [ElementPlusResolver({
        importStyle: "sass"
      })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //2.自动导入定制化样式文件进行样式覆盖
        additionalData: `@use "@/styles/element/index.scss" as * ;`,
      }
    }
  }
})
