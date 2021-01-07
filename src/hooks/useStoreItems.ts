import { ItunesItemModel } from '../models/index';
import { SET_ITUNES_ITEMS } from '../constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { StateTree } from '../models';

type HookReturns = {
  itunesItems: ItunesItemModel[];
  storeItunesItems: (itunesItems: ItunesItemModel[]) => void;
};

const useStoreItems = (): HookReturns => {
  const itunesItems = useSelector((state: StateTree) => state.itunesItems);

  const dispatch = useDispatch();

  const storeItunesItems = (itunesItems: ItunesItemModel[]): void => {
    dispatch({
      type: SET_ITUNES_ITEMS,
      itunesItems: itunesItems,
    });
  };

  return { itunesItems, storeItunesItems };
};

export default useStoreItems;
