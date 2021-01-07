import { ItunesItemModel } from '../models';

const filterItems = (items: ItunesItemModel[], artistId: number): ItunesItemModel[] => {
  return items.filter((item) => item.artistId === artistId);
};

export default filterItems;
