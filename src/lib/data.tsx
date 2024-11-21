import {faDiscord, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

export const NavLinks = [
    { name: 'About', href: 'under-construction' },
    { name: 'Experience', href: 'under-construction' },
    { name: 'Projects', href: 'under-construction' },
    { name: 'Contact', href: 'under-construction' },
];

export const SocialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/harshavardhankona', icon: faLinkedinIn },
    { name: 'GitHub', href: 'https://github.com/kshvr16', icon: faGithub },
    { name: 'Discord', href: 'https://discord.com/harshavardhankona', icon: faDiscord },
];

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
