import Filter from './Filter';

interface Props {
  filters: Array<string>;
  filterType: 'Items' | 'Favourites';
}

export default function FilterGroup({ filters }: Props): JSX.Element {
  return (
    <ol className="visibility-filter__group visibility-filter__types">
      {filters.length > 0 &&
        filters.map((filter, index) => <Filter key={index} filterType={filter} />)}
    </ol>
  );
}
