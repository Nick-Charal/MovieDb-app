/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**'
            }
        ]
    },

    async redirects() {
        return [
            {
                source: './movie/about-us',
                destination: './about-us',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
