// Next.js
import Head from 'next/head';

// Constants
import { ITEMS_FILTERS } from '../constants';

// Hooks
import useVisibilityFilter from '../hooks/useVisibilityFilter';

// Components
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import FilterWrapper from '../components/FilterWrapper';
import FilterGroup from '../containers/FilterGroup';
import ItunesItems from '../containers/ItunesItems';

export default function Favourites(): JSX.Element {
  const { itemsFilter, changeItemsFilter } = useVisibilityFilter();
  return (
    <div>
      <Head>
        <title>Favourites page</title>
        <link rel="icon" href="/" />
      </Head>
      <Header />
      <main>
        <PageTitle text="Favourites" />
        <FilterWrapper>
          <FilterGroup
            filters={ITEMS_FILTERS}
            activeFilter={itemsFilter}
            toggleFilterCallback={changeItemsFilter}
          />
        </FilterWrapper>
        <ItunesItems favouritesOnly />
      </main>
    </div>
  );
}
