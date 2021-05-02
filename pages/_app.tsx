import '../styles/globals.scss'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
