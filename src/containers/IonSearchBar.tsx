import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import useSearchArtist from '../hooks/useSearchArtist';
import useGetDiscography from '../hooks/useGetDiscography';
import useVisibilityFilter from '../hooks/useVisibilityFilter';
import SearchInput from '../components/SearchInput';
import useStoreItems from '../hooks/useStoreItems';

export default function IonSearchBar(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 800);

  // The selected filter is extracted in order to fetch the right type of items from API
  const { itemsFilter } = useVisibilityFilter();

  const { artist } = useSearchArtist(debouncedQuery);
  const { fetchedItems } = useGetDiscography(artist.artistName, artist.artistId, itemsFilter);
  const { setItunesItems } = useStoreItems();

  // After the selected type of items are fetched, they get stored inside redux state
  setItunesItems(fetchedItems);

  return <SearchInput query={query} onChange={(e) => setQuery(e.currentTarget.value)} />;
}
