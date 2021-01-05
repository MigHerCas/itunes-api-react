import { ItemsFilter, FavouritesFilter } from '../models';

export const SET_ITEMS_VISIBILITY_FILTER = 'SET_ITEMS_VISIBILITY_FILTER';
export const SET_FAVOURITES_VISIBILITY_FILTER = 'SET_FAVOURITES_VISIBILITY_FILTER';
export const SET_SEARCH_ITEMS = 'SET_SEARCH_ITEMS';

export const FAVOURITE_FILTERS: FavouritesFilter[] = ['Only favourites', 'Non favourites', 'All'];
export const ITEMS_FILTERS: ItemsFilter[] = ['Tracks', 'Albums'];
