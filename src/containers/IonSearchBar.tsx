import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import SearchInput from '../components/SearchInput';
import useFetchArtist from '../hooks/useFetchArtist';
import useStoreArtist from '../hooks/useStoreArtist';

export default function IonSearchBar(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 800);
  const { selectedArtist, setDebouncedQuery } = useFetchArtist();
  const { storedArtist, storeArtist } = useStoreArtist();

  useEffect(() => {
    setDebouncedQuery(debouncedQuery);
  }, [debouncedQuery, setDebouncedQuery]);

  useEffect(() => {
    if (selectedArtist && storedArtist !== selectedArtist) {
      storeArtist(selectedArtist);
    }
  }, [selectedArtist, storeArtist, storedArtist]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value);
  };

  return <SearchInput query={query} onChange={handleChange} />;
}
