import { useState } from 'react';
import useSearchArtist from '../hooks/useSearchArtist';
import { useDebounce } from 'use-debounce';

interface Props {
  placeholder: string;
}

export default function IonSearchBar({ placeholder }: Props): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 800);

  const { artists } = useSearchArtist(debouncedQuery);

  if (artists) {
    console.log(artists);
  }
  return (
    <input
      onChange={(e) => setQuery(e.currentTarget.value)}
      className="ion-searchbar"
      type="search"
      name="search"
      placeholder={placeholder}
      defaultValue={query}
    />
  );
}
