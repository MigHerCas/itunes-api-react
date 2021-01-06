import EmptyIllustration from '../../public/empty.svg';
import Image from 'next/image';

export default function EmptyResults(): JSX.Element {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '0 2rem',
      }}
    >
      <Image
        src={EmptyIllustration}
        width={500}
        height={500}
        layout={'intrinsic'}
        objectFit={'contain'}
      />
    </div>
  );
}
