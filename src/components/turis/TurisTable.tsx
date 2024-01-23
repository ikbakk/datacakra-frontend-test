import { Tourist } from '@/lib/types/tourist';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import TurisTableRow from './TurisTableRow';

type TurisTableProps = {
  tourists: Tourist[];
};

const TurisTable = ({ tourists }: TurisTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Nama</TableHead>
          <TableHead className="text-center">Lokasi</TableHead>
          <TableHead className="text-right">Tgl. Daftar</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tourists.map((tourist) => (
          <TurisTableRow
            key={tourist.id}
            id={tourist.id}
            name={tourist.tourist_name}
            email={tourist.tourist_email}
            location={tourist.tourist_location}
            createdat={tourist.createdat}
            profilePicture={tourist.tourist_profilepicture}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default TurisTable;
