interface Props {
  children: React.ReactNode;
}

export default function ItunesItems({ children }: Props): JSX.Element {
  return <ol className="grid itunes-items">{children}</ol>;
}
