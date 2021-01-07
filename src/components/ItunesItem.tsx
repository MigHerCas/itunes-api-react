import { mdiCardsHeart } from '@mdi/js';
import { ItunesItemModel } from '../models';
import CustomIcon from '../utils/CustomIcon';
import Image from 'next/image';

export default function ItunesItem({
  id,
  imgUrl,
  title,
  artistName,
  isFavourite,
  type,
  onToggle,
}: ItunesItemModel): JSX.Element {
  return (
    <li className="itunes-item">
      <div className="itunes-item__toggle-favourite">
        <button onClick={() => onToggle && onToggle(id)}>
          <CustomIcon
            stroke="#ffd60a"
            path={mdiCardsHeart}
            size={2}
            fill={isFavourite ? '#ffcc00' : 'transparent'}
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
