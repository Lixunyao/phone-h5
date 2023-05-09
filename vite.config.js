import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createHtmlPlugin } from 'vite-plugin-html';

const pathResolve = (dir) => resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: true })],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: true })],
    }),
    createHtmlPlugin()
  ],
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/index.scss";'
      },
    },
  },
  server: {
    // port: 3000, // 默认 // vite3已改为默认5173
    host: true, // 支持从ip启动
    /* open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // 后台服务地址
        changeOrigin: true, // 是否允许不同源
        secure: false, // 支持https
        rewrite: path => path.replace(/^\/api/, ''),
      },
    }, */
  },
})
