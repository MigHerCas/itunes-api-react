import { SET_ITEMS_VISIBILITY_FILTER } from './../constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { FavouritesFilter, ItemsFilter, StateTree } from '../models';
import { SET_FAVOURITES_VISIBILITY_FILTER } from '../constants';

type HookReturns = {
  itemsFilter: ItemsFilter;
  favouritesFilter: FavouritesFilter;
  changeItemsFilter: <T>(filter: T) => void;
  changeFavouritesFilter: <T>(filter: T) => void;
};

const useVisibilityFilter = (): HookReturns => {
  const itemsFilter = useSelector((state: StateTree) => state.itemsFilter);
  const favouritesFilter = useSelector((state: StateTree) => state.favouritesFilter);

  const dispatch = useDispatch();

  const changeItemsFilter = <ItemsFilter>(filter: ItemsFilter): void => {
    console.log(filter);
    dispatch({
      type: SET_ITEMS_VISIBILITY_FILTER,
      itemsFilter: filter,
    });
  };

  const changeFavouritesFilter = <FavouritesFilter>(filter: FavouritesFilter): void => {
    console.log(filter);
    dispatch({
      type: SET_FAVOURITES_VISIBILITY_FILTER,
      favouritesFilter: filter,
    });
  };

  return { itemsFilter, favouritesFilter, changeItemsFilter, changeFavouritesFilter };
};

export default useVisibilityFilter;
