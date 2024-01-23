import Image from 'next/image';

type CustomHeaderAvatarProps = {
  src: string;
};

const CustomHeaderAvatar = ({ src }: CustomHeaderAvatarProps) => {
  return (
    <figure className="relative h-full w-[20%] overflow-hidden rounded-md bg-primary">
      <Image src={src} alt="profilepicture" fill className="object-cover" />
    </figure>
  );
};

export default CustomHeaderAvatar;
