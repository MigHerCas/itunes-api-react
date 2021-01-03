import Head from 'next/head';
import Header from '../components/Header';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Itunes api app</title>
        <link rel="icon" href="/" />
      </Head>
      <Header />
    </div>
  );
}
