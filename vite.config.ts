import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// plugin
import { createHtmlPlugin } from 'vite-plugin-html'
// import VitePluginLinaria from 'vite-plugin-linaria'
import pluginLinaria from '@linaria/rollup';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080
  },
  plugins: [
    react(),
    pluginLinaria(),

    createHtmlPlugin({
      minify: true,
      /**
       * Data that needs to be injected into the index.html ejs template
       */
      inject: {
        data: {
          title: 'app',
          injectScript: `<script src="./inject.js"></script>`,
        },
      },
    }),
  ],

  css: {
    modules: {
      //generateScopedName: "[name]__[local]___[hash:base64:5]",
      generateScopedName: "[hash:base64:3]",
    }
  },
})
