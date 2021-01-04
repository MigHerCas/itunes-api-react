import { useState, useEffect } from 'react';
import axios from 'axios';
import { Artist } from '../models';

const { BASE_API_URL } = process.env;

type ArtistSearchApiResponse = {
  results: Artist[];
};

type HookReturns = {
  artists: Artist[];
  isLoading: boolean;
};

const useSearchArtist = (query: string): HookReturns => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<ArtistSearchApiResponse>(`${BASE_API_URL}`, {
        params: {
          term: query,
          entity: 'musicArtist',
          country: 'es',
          attribute: 'allArtistTerm',
        },
      })
      .then((response) => setArtists(response.data.results))
      .catch((err) => console.log(err));

    setIsLoading(false);
  }, [query]);

  return { artists, isLoading };
};

export default useSearchArtist;
