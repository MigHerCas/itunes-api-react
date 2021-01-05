import { FavouritesFilter, ItemsFilter } from '../models';
import Filter from '../components/Filter';
import useVisibilityFilter from '../hooks/useVisibilityFilter';
interface Props {
  filters: Array<ItemsFilter | FavouritesFilter>;
  filterType: 'Items' | 'Favourites';
}

export default function FilterGroup({ filters, filterType }: Props): JSX.Element {
  const {
    favouritesFilter,
    itemsFilter,
    changeFavouritesFilter,
    changeItemsFilter,
  } = useVisibilityFilter();
  if (!filters.length) return <></>;

  switch (filterType) {
    case 'Items':
      return (
        <ol className="visibility-filter__group">
          {(filters as ItemsFilter[]).length > 0 &&
            (filters as ItemsFilter[]).map((filter) => (
              <Filter
                key={filter}
                filterOption={filter}
                isActive={itemsFilter === filter}
                onClick={() => changeItemsFilter(filter)}
              />
            ))}
        </ol>
      );
    case 'Favourites':
      return (
        <ol className="visibility-filter__group">
          {(filters as FavouritesFilter[]).length > 0 &&
            (filters as FavouritesFilter[]).map((filter) => (
              <Filter
                key={filter}
                filterOption={filter}
                isActive={favouritesFilter === filter}
                onClick={() => changeFavouritesFilter(filter)}
              />
            ))}
        </ol>
      );
    default:
      return <></>;
  }
}
