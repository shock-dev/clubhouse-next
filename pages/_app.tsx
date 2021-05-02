import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
