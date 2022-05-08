import { defineConfig } from 'vite'

const path = require('path')

export default defineConfig({
  // ...
 build: {
     rollupOptions: {
         input: {
             'background': path.resolve(__dirname, 'src/background.js'),
             'popup': path.resolve(__dirname, './popup.html')
         },
         output: {
             entryFileNames:  '[name].js'
         }
     }
 }
})