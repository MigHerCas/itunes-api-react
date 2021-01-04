interface Props {
  filterType: string;
}

export default function Filter({ filterType }: Props): JSX.Element {
  return (
    <li className="filter-item">
      <button className="filter-button">{filterType}</button>
    </li>
  );
}
