interface Props {
  text: string;
}

export default function PageTitle({ text }: Props): JSX.Element {
  return <h1>{text}</h1>;
}
