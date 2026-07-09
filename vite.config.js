import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Lista-de-Compras/',//foi adicionada para que o projeto funcione corretamente no github pages, pois o mesmo não consegue acessar os arquivos do projeto sem essa configuração.
})
