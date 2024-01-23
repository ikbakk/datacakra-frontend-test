import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

type TurisPaginationFirstProps = {
  totalPages: number;
};

const TurisPaginationFirst = ({ totalPages }: TurisPaginationFirstProps) => {
  return (
    <>
      <PaginationItem>
        <PaginationPrevious className="pointer-events-none" href="" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="?page=1" isActive>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="?page=2">2</PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink href="?page=3">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={`?page=${totalPages}`}>
          {totalPages}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="?page=2" />
      </PaginationItem>
    </>
  );
};

export default TurisPaginationFirst;
