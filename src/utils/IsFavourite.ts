import { ItunesItemModel } from '../models';

const isFavourite = (favourites: ItunesItemModel[], item: ItunesItemModel): boolean => {
  return !!favourites.find((favouriteItem) => favouriteItem.id === item.id);
};

export default isFavourite;
