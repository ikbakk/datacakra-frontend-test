'use client';

import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { formatDate } from '@/lib/dateFormatter';

import { useRouter } from 'next/navigation';

type TouristDataRowProps = {
  id: string;
  profilePicture: string;
  name: string;
  email: string;
  location: string;
  createdat: string;
  token?: string;
};

const TouristDataRow = ({
  name,
  profilePicture,
  email,
  location,
  createdat,
  id,
  token,
}: TouristDataRowProps) => {
  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/turis/${id}`);
  };

  const handleButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/Tourist/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!res.ok) {
        throw new Error(res.statusText);
      }
      router.refresh();

      alert('Hapus data sukses');
    } catch (error) {
      console.log(error);
      alert('Hapus data gagal');
    }
  };
  return (
    <TableRow
      onClick={() => handleRowClick()}
      className="text-card-foreground duration-150 hover:cursor-pointer hover:bg-black/20 active:bg-black/35"
    >
      <TableCell>
        <figure className="h-10 w-10 overflow-hidden rounded-full">
          <img src={profilePicture} className="h-full w-full object-cover" />
        </figure>
      </TableCell>
      <TableCell>
        <p className="font-bold">{name}</p>
        <p className="font-semibold text-card-foreground/70">{email}</p>
      </TableCell>
      <TableCell className="text-center">{location}</TableCell>
      <TableCell className="text-right">{formatDate(createdat)}</TableCell>
      <TableCell className="text-right">
        <Button onClick={(e) => handleButtonClick(e)} variant="destructive">
          <Icon name="Trash" size={14} className="mr-2" /> Hapus
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TouristDataRow;
