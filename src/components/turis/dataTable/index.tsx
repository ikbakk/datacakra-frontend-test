import { Tourist } from '@/lib/types/tourist';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TouristDataRow from './TableRow';

type TouristDataTableProps = {
  tourists: Tourist[];
};

const TouristDataTable = ({ tourists }: TouristDataTableProps) => {
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
          <TouristDataRow
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

export default TouristDataTable;
