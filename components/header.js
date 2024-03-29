import Head from 'next/head';

export const siteTitle = 'CRUD Website';

export default function Header() {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            <meta name="description" content="Description" />
            <meta name="keywords" content="Keywords" />
            <meta name="theme-color" content="#317EFB" />
            <meta name="apple-mobile-web-app-status-bar" content="#317EFB" />
            
            <link href="/manifest.json" rel="manifest" />
            <link href="/icons/icon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
            <link href="/icons/icon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
            <link href="/icons/icon-16x16.png" rel="apple-touch-icon" />
            
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}