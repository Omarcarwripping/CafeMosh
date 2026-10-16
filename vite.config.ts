import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the build works from any path:
// https://omarcarwripping.github.io/CafeMosh/ as well as a custom domain root.
export default defineConfig({
  plugins: [react()], 
})
