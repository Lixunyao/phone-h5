import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

const pathResolve = (dir) => resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
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
  }
})
