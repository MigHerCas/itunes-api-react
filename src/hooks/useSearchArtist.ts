import { useState, useEffect } from 'react';
import axios from 'axios';

const { BASE_API_URL } = process.env;

type HookReturns = {
  artists: any;
  isLoading: boolean;
};

const useSearchArtist = (query: string): HookReturns => {
  const [artists, setArtists] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(BASE_API_URL);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_API_URL}`, {
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
