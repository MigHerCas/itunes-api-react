import axios from 'axios';
import { useState, useEffect } from 'react';
import { Album, Track } from '../models';

const { BASE_API_URL } = process.env;

type HookReturns = {
  items: Array<Track | Album>;
  isLoading: boolean;
};

type ArtistContent = 'Tracks' | 'Albums';

const filterItems = (
  items: Array<Track | Album>,
  artistId: number,
  itemsType: ArtistContent
): Array<Track | Album> => {
  if (itemsType === 'Albums') {
    return (items as Track[]).filter((item) => item.artistId === artistId);
  } else {
    return (items as Album[]).filter((item) => item.artistId === artistId);
  }
};

const useGetDiscography = (
  artistName: string,
  artistId: number,
  typeOfItems: ArtistContent
): HookReturns => {
  const [items, setItems] = useState<Array<Track | Album>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log('Artist name:', artistName);
  console.log('Artist id:', artistId);

  useEffect(() => {
    setIsLoading(true);
    axios
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
        const filteredItems = filterItems(response.data.results, artistId, typeOfItems);
        setItems(filteredItems);
      })
      .catch((err) => console.log(err));

    setIsLoading(false);
  }, [artistName, typeOfItems, artistId]);

  return { items, isLoading };
};

export default useGetDiscography;
