import React, { useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import Head from 'next/head';
import Script from 'next/script';

import { getInitialTheme, GlobalStyle } from '../special/GlobalTheme';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

// Import External Global CSS/SCSS
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Global CSS
import '../styles/hover.css';
import '../styles/globals.css';
import '../styles/repository-page.css';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme));
  },[theme]);

  return(
    <div id="container">
      <Head>
        <title>Grandis Library</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </Head>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
              <MainNavbar setTheme={setTheme} theme={theme}/>
              <div id="main-content"><Component {...pageProps}/></div>
            <Footer/>
        </>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
