import axios from 'axios';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Artist } from '../models';

type HookReturns = {
  selectedArtist: Artist | null;
  isLoading: boolean;
  isError: boolean;
  setDebouncedQuery: Dispatch<SetStateAction<string>>;
};

type ArtistSearchApiResponse = {
  results: Artist[];
};

const { BASE_API_URL } = process.env;

const useFetchArtist = (): HookReturns => {
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchArtist = (): void => {
      setIsLoading(true);
      setIsError(false);

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
          setIsError(true);
        });
      setIsLoading(false);
    };

    fetchArtist();
  }, [debouncedQuery]);

  return { selectedArtist, isLoading, isError, setDebouncedQuery };
};

export default useFetchArtist;
