import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub 저장소 이름이 gitPortfolio인 경우
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/gitPortfolio/', // 저장소 이름과 정확히 일치시켜야 합니다.
})