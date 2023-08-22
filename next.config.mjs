/** @type {import('next').NextConfig} */
import path from 'path'

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(path.resolve(), 'app/styles')],
  },
  images: {
    domains: ['lh3.googleusercontent.com']
  }
}

export default nextConfig
