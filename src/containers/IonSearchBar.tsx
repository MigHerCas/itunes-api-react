import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import useSearchArtist from '../hooks/useSearchArtist';
import useGetDiscography from '../hooks/useGetDiscography';
import useVisibilityFilter from '../hooks/useVisibilityFilter';
import SearchInput from '../components/SearchInput';

export default function IonSearchBar(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 800);

  // We get the selected filter in order to fetch the right type of items from API
  const { itemsFilter } = useVisibilityFilter();

  const { artist } = useSearchArtist(debouncedQuery);
  const { items } = useGetDiscography(artist.artistName, artist.artistId, itemsFilter);
  console.log('Artist', artist);
  console.log('Items', items);

  return <SearchInput query={query} onChange={(e) => setQuery(e.currentTarget.value)} />;
}
