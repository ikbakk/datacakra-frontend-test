import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

type TurisPaginationLastProps = {
  totalPages: number;
};

const TurisPaginationLast = ({ totalPages }: TurisPaginationLastProps) => {
  return (
    <>
      <PaginationItem>
        <PaginationPrevious href={`?page=${totalPages - 1}`} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={`?page=1`}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={`?page=${totalPages - 1}`}>
          {totalPages - 1}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={`?page=${totalPages}`}>
          {totalPages}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="pointer-events-none">
        <PaginationNext href="" />
      </PaginationItem>
    </>
  );
};

export default TurisPaginationLast;
