'use client';

import { formatDate } from '@/lib/dateFormatter';
import { TableCell, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import Icon from '../Icon';
import { useRouter } from 'next/navigation';

type TurisTableRowType = {
  id: string;
  profilePicture: string;
  name: string;
  email: string;
  location: string;
  createdat: string;
};

const TurisTableRow = ({
  name,
  profilePicture,
  email,
  location,
  createdat,
  id,
}: TurisTableRowType) => {
  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/turis/${id}`);
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    console.log(name);
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

export default TurisTableRow;
