import Image from 'next/image';
import { useRouter } from 'next/router';
import { ItunesItemModel } from '../models';
import useFavourites from '../hooks/useFavourites';
import useVisibilityFilter from '../hooks/useVisibilityFilter';
import isFavourite from '../utils/IsFavourite';
import CustomIcon from '../utils/CustomIcon';
import { mdiCardsHeart } from '@mdi/js';

export default function ItunesItem(itunesItem: ItunesItemModel): JSX.Element {
  const router = useRouter();
  const { imgUrl, title, artistName, type } = itunesItem;
  const { favourites, toggleFavourite } = useFavourites();
  const { itemsFilter, favouritesFilter } = useVisibilityFilter();

  // In favourites page, only return filtered items by type
  if (router.pathname === '/favourites' && itunesItem.type !== itemsFilter) {
    return <></>;
  }

  // In home page, only return filtered items by favourite state
  if (router.pathname === '/') {
    switch (favouritesFilter) {
      case 'Only favourites':
        if (!isFavourite(favourites, itunesItem)) return <></>;
        break;
      case 'Non favourites':
        if (isFavourite(favourites, itunesItem)) return <></>;
        break;
      default:
    }
  }

  return (
    <li className="itunes-item">
      <div className="itunes-item__toggle-favourite">
        <button onClick={() => toggleFavourite(itunesItem)}>
          <CustomIcon
            stroke="#ffd60a"
            path={mdiCardsHeart}
            size={2}
            fill={isFavourite(favourites, itunesItem) ? '#ffcc00' : 'transparent'}
          />
        </button>
      </div>
      <div className="itunes-item__img-wrapper">
        <Image
          src={imgUrl}
          alt="Itunes item cover"
          width={300}
          height={300}
          objectFit={'cover'}
          priority
        />
      </div>
      <div className="itunes-item__info-wrapper">
        <h2 className="itunes-item__title">{title}</h2>
        <h3 className="itunes-item__subtitle">{artistName}</h3>
        <span className={`itunes-item__type itunes-item__type--${type}`}>{type}</span>
      </div>
    </li>
  );
}
