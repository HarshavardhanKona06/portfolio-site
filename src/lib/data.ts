
export const FooterComponentData = {
    PAGE_OWNER: {
        NAME: 'Harshavardhan Kona',
        URL: 'https://harshavardhankona.com',
    },
    BUILT_USING: {
        NAME: 'Next.js',
        URL: 'https://nextjs.org',
    },
    DEPLOYED_ON: {
        NAME: 'Vercel',
        URL: 'https://vercel.com',
    },
} as const;

export const getYear = () => {
    try {
        return new Date().getFullYear();
    } catch (error) {
        console.error('Error getting current year:', error);
        return 2024;
    }
};
