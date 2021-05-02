import Head from 'next/head';
import { WelcomeStep } from '../components/steps/WelcomeStep';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <WelcomeStep />
    </div>
  )
}
