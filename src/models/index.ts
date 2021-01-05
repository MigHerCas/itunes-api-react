export interface Artist {
  artistId: number;
  artistName: 'David Bowie';
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
  artist: string;
  type: 'Album' | 'Track';
  isFavourite: boolean;
}

export type StateTree = {
  itemsFilter: ItemsFilter;
  favouritesFilter: FavouritesFilter;
  searchItems: Track[] | Album[];
};

export type ItemsFilter = 'Tracks' | 'Albums';
export type FavouritesFilter = 'Only favourites' | 'Non favourites' | 'All';
