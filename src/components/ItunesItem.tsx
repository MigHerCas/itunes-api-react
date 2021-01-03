import { mdiCardsHeart } from '@mdi/js';
import CustomIcon from '../utils/CustomIcon';

interface Props {
  imgUrl: string;
  title: string;
  subtitle: string;
  type: 'Track' | 'Album';
  isFavourite: boolean;
}

export default function ItunesItem({
  imgUrl,
  title,
  subtitle,
  isFavourite,
  type,
}: Props): JSX.Element {
  return (
    <li className="itunes-item">
      <div className="itunes-item__toggle-favourite">
        <button>
          <CustomIcon
            stroke="#0a84ff"
            path={mdiCardsHeart}
            size={2}
            fill={isFavourite ? '#0a84ff' : 'transparent'}
            title="Favourite Icon"
          />
        </button>
      </div>
      <div className="itunes-item__img-wrapper">
        <img src={imgUrl} alt="Itunes item cover" />
      </div>
      <div className="itunes-item__info-wrapper">
        <h2 className="itunes-item__title">{title}</h2>
        <h3 className="itunes-item__subtitle">{subtitle}</h3>
        <span className={`itunes-item__type itunes-item__type--${type}`}>{type}</span>
      </div>
    </li>
  );
}
