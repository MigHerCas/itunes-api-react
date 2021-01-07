import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import fetchArtist from '../api/fetchArtist';
import SearchInput from '../components/SearchInput';
import useStoreArtist from '../hooks/useStoreArtist';

export default function IonSearchBar(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 800);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value);
  };

  const artist = fetchArtist(debouncedQuery);
  const { storeSelectedArtist } = useStoreArtist();

  console.log(artist);
  useMemo(() => {
    // Artist stored inside state tree when fetched correctly
    if (artist) {
      storeSelectedArtist(artist);
    }
  }, [artist, storeSelectedArtist]);

  return <SearchInput query={query} onChange={handleChange} />;
}
