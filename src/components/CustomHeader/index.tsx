import Link from 'next/link';
import { Button } from '../ui/button';
import CustomHeaderAvatar from './Avatar';
import CustomHeaderWrapper from './Wrapper';

type CustomHeaderProps = {
  profilePicture: string;
  name: string;
  email: string;
  buttonTitle: string;
  href: string;
};

const CustomHeader = ({
  profilePicture,
  name,
  email,
  buttonTitle,
  href,
}: CustomHeaderProps) => {
  return (
    <CustomHeaderWrapper>
      <CustomHeaderAvatar src={profilePicture} />
      <section className="flex h-full w-full flex-col justify-center gap-2">
        <h2 className="text-2xl font-bold capitalize">{name}</h2>
        <h3>{email}</h3>
      </section>
      <section className="my-auto">
        <Link href={href}>
          <Button>{buttonTitle}</Button>
        </Link>
      </section>
    </CustomHeaderWrapper>
  );
};

export default CustomHeader;
