import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { StateTree, ItunesItemModel } from './../models/index';
import filterItems from '../utils/FilterItems';
import parseItems from '../utils/ParseItems';

type HookReturns = {
  discography: ItunesItemModel[];
  isLoading: boolean;
  isError: boolean;
};

const useFetchDiscography = (): HookReturns => {
  // Necessary info for fetching right items
  const storedArtist = useSelector((state: StateTree) => state.selectedArtist);
  const filterType = useSelector((state: StateTree) => state.itemsFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [discography, setDiscography] = useState<ItunesItemModel[]>([]);

  useMemo(() => {
    const fetchDiscography = (): void => {
      setIsLoading(true);
      setIsError(false);
      axios
        .get(`${process.env.BASE_API_URL}`, {
          headers: {
            'Access-Control-Allow-Origin': process.env.PRODUCTION_URL,
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          },
          params: {
            term: storedArtist.artistName,
            entity: filterType === 'Tracks' ? 'musicTrack' : 'album',
            country: 'es',
            attribute: 'artistTerm',
          },
        })
        .then((response) => {
          if (response.data.results) {
            const parsedItems = parseItems(response.data.results, filterType);
            const filteredItems = filterItems(parsedItems, storedArtist.artistId);
            setDiscography(filteredItems);
          }
        })
        .catch((err) => {
          setIsError(false);
          console.log(err);
        });

      setIsLoading(false);
    };

    fetchDiscography();
  }, [storedArtist, filterType]);

  return { discography, isLoading, isError };
};

export default useFetchDiscography;
