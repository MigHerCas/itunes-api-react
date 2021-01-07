import axios from 'axios';
import { useState, useEffect } from 'react';
import { Artist } from '../models';

type HookReturns = {
  selectedArtist: Artist | null;
  isLoading: boolean;
  setDebouncedQuery: any;
};

type ArtistSearchApiResponse = {
  results: Artist[];
};

const { BASE_API_URL } = process.env;

const useFetchArtist = (): HookReturns => {
  const [debouncedQuery, setDebouncedQuery] = useState<string>();
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchArtist = (): void => {
      setIsLoading(true);

      axios
        .get<ArtistSearchApiResponse>(`${BASE_API_URL}`, {
          params: {
            term: debouncedQuery,
            entity: 'musicArtist',
            country: 'es',
            attribute: 'allArtistTerm',
          },
        })
        .then((response) => response.data.results && setSelectedArtist(response.data.results[0]))
        .catch((err) => {
          console.log(err);
        });
      setIsLoading(false);
    };

    fetchArtist();
  }, [debouncedQuery]);

  return { selectedArtist, isLoading, setDebouncedQuery };
};

export default useFetchArtist;
