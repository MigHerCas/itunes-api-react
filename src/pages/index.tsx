import React from 'react';
import Head from 'next/head';
import FilterGroup from '../containers/FilterGroup';
import { FAVOURITE_FILTERS, ITEMS_FILTERS } from '../constants';
import useVisibilityFilter from '../hooks/useVisibilityFilter';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import ItunesItems from '../components/ItunesItems';
import ItunesItem from '../components/ItunesItem';
import FilterWrapper from '../components/FilterWrapper';

export default function Home(): JSX.Element {
  const {
    itemsFilter,
    favouritesFilter,
    changeItemsFilter,
    changeFavouritesFilter,
  } = useVisibilityFilter();

  return (
    <div className="container">
      <Head>
        <title>Itunes api app</title>
        <link rel="icon" href="/" />
      </Head>
      <Header />
      <main>
        <PageTitle text="Results" />
        <FilterWrapper>
          <FilterGroup
            filters={ITEMS_FILTERS}
            activeFilter={itemsFilter}
            toggleFilterCallback={changeItemsFilter}
          />
          <FilterGroup
            filters={FAVOURITE_FILTERS}
            activeFilter={favouritesFilter}
            toggleFilterCallback={changeFavouritesFilter}
          />
        </FilterWrapper>
        <ItunesItems>
          <ItunesItem
            id={0}
            title="Title example"
            artist="Subtitle example"
            isFavourite={false}
            type="Track"
            imgUrl="http://unsplash.it/1400?random&gravity=center"
          />
          <ItunesItem
            id={1}
            title="Title example"
            artist="Subtitle example"
            isFavourite={true}
            type="Album"
            imgUrl="http://unsplash.it/1500?random&gravity=center"
          />
        </ItunesItems>
      </main>
    </div>
  );
}
