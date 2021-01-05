export interface Artist {
  artistId: number;
  artistName: string;
  artistLinkUrl: string;
}

export interface Track {
  artistId: number;
  artistName: string;
  kind: 'song';
  trackId: number;
  artworkUrl100: string;
  trackName: string;
  trackViewUrl: string;
}

export interface Album {
  artistId: number;
  artistName: string;
  artworkUrl100: string;
  collectionId: number;
  collectionName: string;
  collectionViewUrl: string;
}

export interface ItunesItemModel {
  id: number;
  imgUrl: string;
  title: string;
  artistName: string;
  artistId: number;
  type: ItemsFilter;
  isFavourite: boolean;
}

export type StateTree = {
  itemsFilter: ItemsFilter;
  favouritesFilter: FavouritesFilter;
  itunesItems: ItunesItemModel[];
};

export type ItemsFilter = 'Tracks' | 'Albums';
export type FavouritesFilter = 'Only favourites' | 'Non favourites' | 'All';
