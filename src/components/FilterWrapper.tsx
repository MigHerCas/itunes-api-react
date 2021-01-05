interface Props {
  children: React.ReactNode;
}

export default function VisibilityFilter({ children }: Props): JSX.Element {
  return <nav className="visibility-filter">{children}</nav>;
}
