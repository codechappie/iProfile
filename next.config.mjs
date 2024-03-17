/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
        API_URL: process.env.API_URL,
    }
};

export default nextConfig;
