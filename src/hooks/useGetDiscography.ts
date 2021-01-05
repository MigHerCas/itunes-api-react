import axios from 'axios';
import { useEffect, useState } from 'react';
import parseItems from '../utils/ParseItems';
import { ItemsFilter, ItunesItemModel } from './../models/index';

const { BASE_API_URL } = process.env;

type HookReturns = {
  fetchedItems: Array<ItunesItemModel>;
  isLoading: boolean;
};

const filterItems = (items: Array<ItunesItemModel>, artistId: number): Array<ItunesItemModel> => {
  return items.filter((item) => item.artistId === artistId);
};

const useGetDiscography = (
  artistName: string,
  artistId: number,
  typeOfItems: ItemsFilter
): HookReturns => {
  const [fetchedItems, setFetchedItems] = useState<ItunesItemModel[]>([]);
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
          console.log(response.data.results);
          const parsedItems = parseItems(response.data.results, typeOfItems);
          const filteredItems = filterItems(parsedItems, artistId);
          setFetchedItems(filteredItems);
        })
        .catch((err) => console.log(err));
    }

    if (artistName && typeOfItems) {
      setIsLoading(true);
      fetchDiscography();
      setIsLoading(false);
    }
  }, [artistName, typeOfItems, artistId]);

  return { fetchedItems, isLoading };
};

export default useGetDiscography;
