import { Album, Track } from './../models/index';
import { SET_SEARCH_ITEMS } from './../constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { StateTree } from '../models';

type HookReturns = {
  searchItems: Array<Track | Album>;
  setSearchItems: (items: Array<Track | Album>) => void;
};

const useSearchItems = (): HookReturns => {
  const dispatch = useDispatch();
  const searchItems = useSelector((state: StateTree) => state.searchItems);

  const setSearchItems = (items: Array<Track | Album>): void => {
    dispatch({
      type: SET_SEARCH_ITEMS,
      items: items,
    });
  };

  return { searchItems, setSearchItems };
};

export default useSearchItems;
