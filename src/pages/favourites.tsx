import Head from 'next/head';
import Header from '../components/Header';
import IonSearchBar from '../components/IonSearchBar';

export default function Favourites(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Favourites page</title>
        <link rel="icon" href="/" />
      </Head>
      <Header>
        <IonSearchBar placeholder="Search for a favourite..." />
      </Header>
      <main>
        <h1>Favourites: </h1>
      </main>
    </div>
  );
}
