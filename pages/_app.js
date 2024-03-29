import React, { useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import Head from 'next/head';

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
        <title>Grandis Library | MapleStory Resource for Beginners and Returning Players</title>

        <link rel="preconnect" href="https://securepubads.g.doubleclick.net/" crossorigin></link>

        <script>{`window.AdSlots = window.AdSlots || {cmd: [], disableScripts: ['gpt']};`}</script>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script async src="https://kumo.network-n.com/dist/app.js" site="grandislibrary"></script>
        <script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}/>

        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
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
