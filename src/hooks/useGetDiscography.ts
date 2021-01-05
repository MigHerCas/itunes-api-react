import { ItemsFilter } from './../models/index';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Album, Track } from '../models';

const { BASE_API_URL } = process.env;

type HookReturns = {
  items: Array<Track | Album>;
  isLoading: boolean;
};

const filterItems = <T extends Track | Album>(items: Array<T>, artistId: number): Array<T> => {
  return items.filter((item) => item.artistId === artistId);
};

const useGetDiscography = (
  artistName: string,
  artistId: number,
  typeOfItems: ItemsFilter
): HookReturns => {
  const [items, setItems] = useState<Array<Track | Album>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchDiscography(): Promise<void> {
      await axios
        .get(`${BASE_API_URL}`, {
          params: {
            term: artistName,
            entity: typeOfItems === 'Tracks' ? 'musicTrack' : 'album',
            country: 'es',
            attribute: 'artistTerm',
          },
        })
        .then((response) => {
          const filteredItems = filterItems(response.data.results, artistId);
          setItems(filteredItems);
        })
        .catch((err) => console.log(err));
    }

    if (artistName && typeOfItems) {
      setIsLoading(true);
      fetchDiscography();
      setIsLoading(false);
    }
  }, [artistName, typeOfItems, artistId]);

  return { items, isLoading };
};

export default useGetDiscography;
