import { useState, useEffect } from 'react';
import axios from 'axios';
import { Artist } from '../models';

const { BASE_API_URL } = process.env;

type ArtistSearchApiResponse = {
  results: Artist[];
};

type HookReturns = {
  artist: Artist;
  isLoading: boolean;
};

const useSearchArtist = (query: string): HookReturns => {
  const [artist, setArtist] = useState<Artist>({
    artistId: 0,
    artistName: '',
    artistLinkUrl: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchArtist(): Promise<void> {
      axios
        .get<ArtistSearchApiResponse>(`${BASE_API_URL}`, {
          params: {
            term: query,
            entity: 'musicArtist',
            country: 'es',
            attribute: 'allArtistTerm',
          },
        })
        .then((response) => setArtist(response.data.results[0]))
        .catch((err) => console.log(err));
    }

    if (query) {
      setIsLoading(true);
      fetchArtist();
      setIsLoading(false);
    }
  }, [query]);

  return { artist, isLoading };
};

export default useSearchArtist;
