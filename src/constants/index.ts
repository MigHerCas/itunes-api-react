import { ItemsFilter, FavouritesFilter } from '../models';

// Redux actions
export const SET_ITEMS_VISIBILITY_FILTER = 'SET_ITEMS_VISIBILITY_FILTER';
export const SET_FAVOURITES_VISIBILITY_FILTER = 'SET_FAVOURITES_VISIBILITY_FILTER';
export const SET_ITUNES_ITEMS = 'SET_ITUNES_ITEMS';
export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const SET_SELECTED_ARTIST = 'SET_SELECTED_ARTIST';

// Visibility filters
export const FAVOURITE_FILTERS: FavouritesFilter[] = ['Only favourites', 'Non favourites', 'All'];
export const ITEMS_FILTERS: ItemsFilter[] = ['Tracks', 'Albums'];
