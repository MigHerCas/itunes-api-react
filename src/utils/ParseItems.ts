import { Album, ItemsFilter, ItunesItemModel, Track } from '../models';

const parseItems = (
  rawItems: Array<Track | Album>,
  typeOfItems: ItemsFilter
): Array<ItunesItemModel> => {
  switch (typeOfItems) {
    case 'Tracks':
      return (rawItems as Track[]).map(
        (rawItem): ItunesItemModel => {
          const { artistName, artistId, artworkUrl100, trackId, trackName } = rawItem;

          // Quick fix to increase image size (max 100x100 by api default values)
          const biggerImage = artworkUrl100.replace('100x100', '800x800');
          return {
            artistName: artistName,
            artistId: artistId,
            id: trackId,
            imgUrl: biggerImage,
            title: trackName,
            type: typeOfItems,
          };
        }
      );
    case 'Albums':
      return (rawItems as Album[]).map(
        (rawItem): ItunesItemModel => {
          const { artistName, artistId, artworkUrl100, collectionId, collectionName } = rawItem;

          // Quick fix to increase image size (max 100x100 by api default values)
          const biggerImage = artworkUrl100.replace('100x100', '800x800');
          return {
            artistName: artistName,
            artistId: artistId,
            id: collectionId,
            imgUrl: biggerImage,
            title: collectionName,
            type: typeOfItems,
          };
        }
      );

    default:
      return [];
  }
};

export default parseItems;
