import { FavouritesFilter, ItemsFilter } from '../models';

interface Props {
  filterOption: ItemsFilter | FavouritesFilter;
  isActive: boolean;
  onClick: (filter: ItemsFilter | FavouritesFilter) => void;
}

export default function Filter({ filterOption, isActive, onClick }: Props): JSX.Element {
  return (
    <li className={`filter-item ${isActive ? 'isActive' : ''}`}>
      <button className="filter-button" onClick={() => onClick(filterOption)}>
        {filterOption}
      </button>
    </li>
  );
}
