import Head from 'next/head';
import Header from '../components/Header';
import IonSearchBar from '../components/IonSearchBar';
import PageTitle from '../components/PageTitle';

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
        <PageTitle text="Favourites" />
      </main>
    </div>
  );
}
