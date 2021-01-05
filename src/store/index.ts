import { useMemo } from 'react';
import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  SET_FAVOURITES_VISIBILITY_FILTER,
  SET_ITEMS_VISIBILITY_FILTER,
  SET_ITUNES_ITEMS,
} from '../constants';
import { StateTree } from '../models';

let store: Store | undefined;

const initialState: StateTree = {
  itemsFilter: 'Tracks',
  favouritesFilter: 'All',
  itunesItems: [],
};

const reducer = (state: StateTree = initialState, action: AnyAction): StateTree => {
  switch (action.type) {
    case SET_ITEMS_VISIBILITY_FILTER:
      return { ...state, itemsFilter: action.itemsFilter };
    case SET_FAVOURITES_VISIBILITY_FILTER:
      return { ...state, favouritesFilter: action.favouritesFilter };
    case SET_ITUNES_ITEMS:
      return { ...state, itunesItems: action.itunesItems };
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
