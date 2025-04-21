// next.config.mjs
// import { fileURLToPath } from 'url'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// const __filename = fileURLToPath(import.meta.url)

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Se precisar de rewrites, defina aqui
  async rewrites() {
    return [
      // { source: '/api/:path*', destination: 'https://api.externa/:path*' }
    ]
  },

  // Gatilho do Webpack para forçar o pacote 'punycode' do npm
  webpack(config) {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      punycode: require.resolve('punycode/')
    }
    return config
  }
}

export default nextConfig
