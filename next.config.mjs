// next.config.mjs
export default {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/default',
                permanent: true,
            },
        ];
    },
};
