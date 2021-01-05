import { SET_ITEMS_VISIBILITY_FILTER } from './../constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { FavouritesFilter, ItemsFilter, StateTree } from '../models';
import { SET_FAVOURITES_VISIBILITY_FILTER } from '../constants';

type HookReturns = {
  itemsFilter: ItemsFilter;
  favouritesFilter: FavouritesFilter;
  changeItemsFilter: (filter: ItemsFilter) => void;
  changeFavouritesFilter: (filter: FavouritesFilter) => void;
};

const useVisibilityFilter = (): HookReturns => {
  const itemsFilter = useSelector((state: StateTree) => state.itemsFilter);
  const favouritesFilter = useSelector((state: StateTree) => state.favouritesFilter);

  const dispatch = useDispatch();

  const changeItemsFilter = (filter: ItemsFilter): void => {
    console.log(filter);
    dispatch({
      type: SET_ITEMS_VISIBILITY_FILTER,
      itemsFilter: filter,
    });
  };

  const changeFavouritesFilter = (filter: FavouritesFilter): void => {
    console.log(filter);
    dispatch({
      type: SET_FAVOURITES_VISIBILITY_FILTER,
      favouritesFilter: filter,
    });
  };

  return { itemsFilter, favouritesFilter, changeItemsFilter, changeFavouritesFilter };
};

export default useVisibilityFilter;
