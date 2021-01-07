import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_ARTIST } from '../constants';
import { Artist, StateTree } from '../models';

type HookReturns = {
  storedArtist: Artist;
  storeArtist: (selectedArtist: Artist) => void;
};

const useStoreArtist = (): HookReturns => {
  const storedArtist = useSelector((state: StateTree) => state.selectedArtist);
  const dispatch = useDispatch();

  const storeArtist = (selectedArtist: Artist): void => {
    dispatch({
      type: SET_SELECTED_ARTIST,
      artist: selectedArtist,
    });
  };

  return { storedArtist, storeArtist };
};

export default useStoreArtist;
