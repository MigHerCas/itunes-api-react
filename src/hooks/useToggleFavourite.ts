import { useDispatch } from 'react-redux';
import { TOGGLE_FAVOURITE } from '../constants';

type HookReturns = {
  toggleFavourite: (id: number) => void;
};

const useToggleFavourite = (): HookReturns => {
  const dispatch = useDispatch();

  const toggleFavourite = (id: number): void => {
    console.log('Toggled favourite');
    dispatch({
      type: TOGGLE_FAVOURITE,
      id: id,
    });
  };

  return { toggleFavourite };
};

export default useToggleFavourite;
