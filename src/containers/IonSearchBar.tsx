import React, { useState } from 'react';
import useSearchArtist from '../hooks/useSearchArtist';
import { useDebounce } from 'use-debounce';
import useGetDiscography from '../hooks/useGetDiscography';
import SearchInput from '../components/SearchInput';
import useVisibilityFilter from '../hooks/useVisibilityFilter';
import useSearchItems from '../hooks/useSearchItems';

export default function IonSearchBar(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 800);
  const { setSearchItems } = useSearchItems();
  // We get the selected filter in order to fetch the right type of items from API
  const { itemsFilter } = useVisibilityFilter();

  const { artists } = useSearchArtist(debouncedQuery);

  const { items } = useGetDiscography(artists[0]?.artistName, artists[0]?.artistId, itemsFilter);

  console.log(items);
  if (items.length) {
    setSearchItems(items);
  }

  console.log(items);
  return <SearchInput query={query} onChange={(e) => setQuery(e.currentTarget.value)} />;
}
