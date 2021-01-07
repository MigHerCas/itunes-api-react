import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import SearchInput from '../components/SearchInput';
import { SET_SELECTED_ARTIST } from '../constants';
import useSearchArtist from '../hooks/useSearchArtist';

export default function IonSearchBar(): JSX.Element {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 800);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value);
  };

  const { artist } = useSearchArtist(debouncedQuery);

  // Artist stored inside state tree
  dispatch({
    type: SET_SELECTED_ARTIST,
    selectedArtist: artist,
  });

  return <SearchInput query={query} onChange={handleChange} />;
}
