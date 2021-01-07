import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import fetchArtist from '../api/fetchArtist';
import SearchInput from '../components/SearchInput';
import { SET_SELECTED_ARTIST } from '../constants';

export default function IonSearchBar(): JSX.Element {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 800);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value);
  };

  const artist = fetchArtist(debouncedQuery);

  console.log(artist);
  useMemo(() => {
    // Artist stored inside state tree
    dispatch({
      type: SET_SELECTED_ARTIST,
      selectedArtist: artist,
    });
  }, [artist, dispatch]);

  return <SearchInput query={query} onChange={handleChange} />;
}
