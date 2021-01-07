import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_FAVOURITE } from '../constants';
import { ItunesItemModel, StateTree } from '../models';

type HookReturns = {
  favourites: ItunesItemModel[];
  toggleFavourite: (itunesItem: ItunesItemModel) => void;
};

const useFavourites = (): HookReturns => {
  const favourites = useSelector((state: StateTree) => state.favourites);
  const dispatch = useDispatch();

  const toggleFavourite = (itunesItem: ItunesItemModel): void => {
    dispatch({
      type: TOGGLE_FAVOURITE,
      item: itunesItem,
    });
  };

  return { favourites, toggleFavourite };
};

export default useFavourites;
