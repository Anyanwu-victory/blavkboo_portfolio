import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const deploymentHost = process.env.SITE_URL
  || process.env.URL
  || process.env.VERCEL_PROJECT_PRODUCTION_URL
  || process.env.DEPLOY_PRIME_URL
  || process.env.VERCEL_URL
  || ''
const siteOrigin = deploymentHost
  ? `${/^https?:\/\//i.test(deploymentHost) ? '' : 'https://'}${deploymentHost}`.replace(/\/+$/, '')
  : ''

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    {
      name: 'social-sharing-site-origin',
      transformIndexHtml(html) {
        return html.replaceAll('__SITE_ORIGIN__', siteOrigin)
      },
    },
  ],
  server: { host: '0.0.0.0', port: 3001, strictPort: true },
})
