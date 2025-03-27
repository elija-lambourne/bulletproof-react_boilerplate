// src/components/ui/Head/Head.tsx
import { Helmet } from 'react-helmet-async';
import { env } from '@config/env.ts';

interface HeadProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogImage?: string;
}

const Head = ({
                  title = 'bulletproof-react Boilerplate',
                  description = 'Here is your description',
                  canonicalUrl = env.APP_URL,
                  ogImage = '/logo.png',
              }: HeadProps) => {
    const fullTitle = title === 'bulletproof-react Boilerplate' ? title : `${title} | bulletproof-react Boilerplate`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="icon" href="/logo.png?v=2" />
            <link rel="apple-touch-icon" href="/logo.png?v=2" />
            <link rel="shortcut icon" type="image/png" href="/logo.png?v=2" />
        </Helmet>
    );
};

export default Head;