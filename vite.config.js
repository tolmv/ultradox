import { defineConfig } from 'vite'
import { spawn } from 'child_process'

export default defineConfig({
  optimizeDeps: {
    include: ['ultravox-client']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  server: {
    port: 10000,  // Изменено здесь
    proxy: {
      '/api': 'http://0.0.0.0:10000'
    }
  },
  plugins: [
    {
      name: 'start-server',
      closeBundle() {
        spawn('node', ['start-server.js'], { 
          stdio: 'inherit',
          shell: true
        });
      }
    }
  ]
})
