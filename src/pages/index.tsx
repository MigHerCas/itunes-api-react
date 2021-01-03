import Head from 'next/head';
import Header from '../components/Header';
import IonSearchBar from '../components/IonSearchBar';
import ItunesItems from '../components/ItunesItems';
import ItunesItem from '../components/ItunesItem';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Itunes api app</title>
        <link rel="icon" href="/" />
      </Head>
      <Header>
        <IonSearchBar placeholder="Search for song..." />
      </Header>
      <main>
        <h1>Results: </h1>
        <ItunesItems>
          <ItunesItem
            title="Title example"
            subtitle="Subtitle example"
            isFavourite={false}
            type="track"
            imgUrl="http://unsplash.it/1400?random&gravity=center"
          />
          <ItunesItem
            title="Title example"
            subtitle="Subtitle example"
            isFavourite={true}
            type="album"
            imgUrl="http://unsplash.it/1500?random&gravity=center"
          />
        </ItunesItems>
      </main>
    </div>
  );
}
