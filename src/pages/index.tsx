import React from 'react';
import Head from 'next/head';

// Constants
import { FAVOURITE_FILTERS, ITEMS_FILTERS } from '../constants';

// Custom Hooks
import useVisibilityFilter from '../hooks/useVisibilityFilter';

// Containers (redux logic inside)
import FilterGroup from '../containers/FilterGroup';
import ItunesItems from '../containers/ItunesItems';

// Components (no logic, only visual)
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import FilterWrapper from '../components/FilterWrapper';

export default function Home(): JSX.Element {
  // Redux communicates with containers and components through these custom hooks
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
        <ItunesItems />
      </main>
    </div>
  );
}
