export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.w3schools.com',
                port: '',
                pathname: '/w3images/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/photo-**',
            },
        ],
    },
};
