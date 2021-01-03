import Icon from '@mdi/react';

interface Props {
  path: string;
  color: string;
  title: string;
  size?: number;
}

export default function CustomIcon({ path, color, title, size = 3 }: Props): JSX.Element {
  return (
    <Icon path={path} title={title} size={size} horizontal vertical color={color} rotate={180} />
  );
}
