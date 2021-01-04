import { useState } from 'react';
import useSearchArtist from '../hooks/useSearchArtist';
import { useDebounce } from 'use-debounce';
import useGetDiscography from '../hooks/useGetDiscography';

interface Props {
  placeholder: string;
}

export default function IonSearchBar({ placeholder }: Props): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(query, 800);

  const { artists } = useSearchArtist(debouncedQuery);
  console.log(artists);

  // TODO: Select desired type
  const { items } = useGetDiscography(artists[0]?.artistName, artists[0]?.artistId, 'Albums');

  console.log(items);

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
