import Head from 'next/head';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import ItunesItems from '../components/ItunesItems';
import ItunesItem from '../components/ItunesItem';
import VisibilityFilter from '../components/VisibilityFilter';

export default function Home(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Itunes api app</title>
        <link rel="icon" href="/" />
      </Head>
      <Header />
      <main>
        <PageTitle text="Results" />
        <VisibilityFilter />
        <ItunesItems>
          <ItunesItem
            title="Title example"
            subtitle="Subtitle example"
            isFavourite={false}
            type="Track"
            imgUrl="http://unsplash.it/1400?random&gravity=center"
          />
          <ItunesItem
            title="Title example"
            subtitle="Subtitle example"
            isFavourite={true}
            type="Album"
            imgUrl="http://unsplash.it/1500?random&gravity=center"
          />
        </ItunesItems>
      </main>
    </div>
  );
}
