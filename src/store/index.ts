import { ItunesItemModel } from './../models/index';
import { useMemo } from 'react';
import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  SET_FAVOURITES_VISIBILITY_FILTER,
  SET_ITEMS_VISIBILITY_FILTER,
  SET_SELECTED_ARTIST,
  TOGGLE_FAVOURITE,
} from '../constants';
import { StateTree } from '../models';

let store: Store | undefined;

const initialState: StateTree = {
  itemsFilter: 'Tracks',
  favouritesFilter: 'All',
  selectedArtist: {
    artistId: 0,
    artistName: '',
    artistLinkUrl: '',
  },
  favourites: [],
};

const reducer = (state: StateTree = initialState, action: AnyAction): StateTree => {
  let newState: StateTree;
  let favouriteItem: ItunesItemModel;
  let newFavourites: ItunesItemModel[];

  switch (action.type) {
    case SET_ITEMS_VISIBILITY_FILTER:
      return { ...state, itemsFilter: action.itemsFilter };
    case SET_FAVOURITES_VISIBILITY_FILTER:
      return { ...state, favouritesFilter: action.favouritesFilter };
    case SET_SELECTED_ARTIST:
      return { ...state, selectedArtist: action.artist };
    case TOGGLE_FAVOURITE:
      newState = { ...state };
      favouriteItem = action.item;

      if (newState.favourites.includes(favouriteItem)) {
        console.log('Included');
        newFavourites = newState.favourites.filter(
          (favourite) => favourite.id !== favouriteItem.id
        );
        return { ...state, favourites: newFavourites };
      } else {
        console.log('Not included');
        return { ...state, favourites: [...state.favourites, favouriteItem] };
      }
    default:
      return state;
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function initStore(preloadedState = initialState) {
  return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()));
}

export const initializeStore = (preloadedState: StateTree): Store => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: StateTree): Store {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
