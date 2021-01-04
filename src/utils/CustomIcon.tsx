import Icon from '@mdi/react';

interface Props {
  path: string;
  fill: string;
  stroke?: string;
  size?: number;
}

export default function CustomIcon({ path, fill, stroke = fill, size = 3 }: Props): JSX.Element {
  const style = {
    stroke: stroke,
  };
  return (
    <Icon style={style} path={path} size={size} horizontal vertical color={fill} rotate={180} />
  );
}
