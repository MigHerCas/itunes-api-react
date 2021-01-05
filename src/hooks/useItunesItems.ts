import { Album, Track } from '../models/index';
import { SET_SEARCH_ITEMS } from '../constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { StateTree } from '../models';

type HookReturns = {
  itunesItems: Array<Track | Album>;
  setItunesItems: (items: Array<Track | Album>) => void;
};

const useItunesItems = (): HookReturns => {
  const dispatch = useDispatch();
  const itunesItems = useSelector((state: StateTree) => state.searchItems);

  const setItunesItems = (items: Array<Track | Album>): void => {
    dispatch({
      type: SET_SEARCH_ITEMS,
      items: items,
    });
  };

  return { itunesItems, setItunesItems };
};

export default useItunesItems;
