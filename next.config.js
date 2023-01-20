/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["uortjlczjmucmpaqqhqm.supabase.co","picsum.photos","random.imagecdn.app","source.unsplash.com"],
    unoptimized: true,
  },
  basePath: '/blogify',
}

module.exports = nextConfig
