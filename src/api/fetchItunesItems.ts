import { ItemsFilter, ItunesItemModel } from './../models';
import axios from 'axios';
import parseItems from '../utils/ParseItems';

const { BASE_API_URL } = process.env;

const filterItems = (items: Array<ItunesItemModel>, artistId: number): Array<ItunesItemModel> => {
  return items.filter((item) => item.artistId === artistId);
};

export default function fetchItunesItems(
  artistName: string,
  artistId: number,
  typeOfItems: ItemsFilter
): ItunesItemModel[] {
  if (!artistName || !artistId || typeOfItems) return [];

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
      const parsedItems = parseItems(response.data.results, typeOfItems, null);
      const filteredItems = filterItems(parsedItems, artistId);
      return filteredItems;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
  return [];
}
