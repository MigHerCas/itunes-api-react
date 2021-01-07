import { useDispatch, useSelector } from 'react-redux';
import { SET_ITUNES_ITEMS } from '../constants';
import { Artist, StateTree } from '../models';

type HookReturns = {
  selectedArtist: Artist;
  storeSelectedArtist: (selectedArtist: Artist) => void;
};

const useStoreArtist = (): HookReturns => {
  const selectedArtist = useSelector((state: StateTree) => state.selectedArtist);
  const dispatch = useDispatch();

  const storeSelectedArtist = (selectedArtist: Artist): void => {
    dispatch({
      type: SET_ITUNES_ITEMS,
      selectedArtist: selectedArtist,
    });
  };

  return { selectedArtist, storeSelectedArtist };
};

export default useStoreArtist;
