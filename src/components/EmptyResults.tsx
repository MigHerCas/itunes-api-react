import { useRouter } from 'next/router';
import EmptyIllustrationHome from '../../public/emptyHome.svg';
import EmptyIllustrationFavourites from '../../public/emptyFavourites.svg';
import Image from 'next/image';

export default function EmptyResults(): JSX.Element {
  const router = useRouter();
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '0 2rem',
      }}
    >
      <Image
        src={router.pathname === '/' ? EmptyIllustrationHome : EmptyIllustrationFavourites}
        width={500}
        height={500}
        layout={'intrinsic'}
        objectFit={'contain'}
      />
    </div>
  );
}
