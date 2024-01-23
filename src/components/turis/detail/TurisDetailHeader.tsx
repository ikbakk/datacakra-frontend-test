import { formatDate } from '@/lib/dateFormatter';
import Image from 'next/image';

type DetailHeaderProps = {
  profilePicture: string;
  name: string;
  createdat: string;
  email: string;
};

const DetailHeader = ({
  profilePicture,
  name,
  createdat,
  email,
}: DetailHeaderProps) => {
  return (
    <section className="relative h-1/3 w-full rounded-lg">
      <header className="absolute inset-y-3/4 left-1/2 z-10 flex h-1/2 w-[85%] -translate-x-1/2 items-center justify-between gap-8  overflow-hidden rounded-lg bg-card/50 p-4 text-card-foreground shadow-md backdrop-blur-md ">
        <section className="flex h-full w-full gap-8">
          <figure className="relative h-full w-[20%] overflow-hidden rounded-md bg-primary">
            <Image
              src={profilePicture}
              alt="profilepicture"
              fill
              className="object-cover"
            />
          </figure>
          <section className="flex h-full flex-col justify-center gap-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <h3>{email}</h3>
          </section>
        </section>
        <section className="flex w-full flex-col items-end justify-between gap-2 text-right">
          <p>Mendaftar pada</p>
          <p className="text-2xl font-semibold">{formatDate(createdat)}</p>
        </section>
      </header>
      <div className='h-full w-full rounded-lg bg-opacity-80 bg-[url("/images/curved0.JPG")] bg-cover bg-[10%_center] bg-no-repeat grayscale-[20%] saturate-50' />
    </section>
  );
};

export default DetailHeader;
