import Head from 'next/head';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

export default function Favourites(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Favourites page</title>
        <link rel="icon" href="/" />
      </Head>
      <Header />
      <main>
        <PageTitle text="Favourites" />
      </main>
    </div>
  );
}
