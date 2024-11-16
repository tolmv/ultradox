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
    port: 3000  // Изменено здесь
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
