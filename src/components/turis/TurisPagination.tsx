import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

type TurisPaginationProps = {
  currentPage: number;
  totalPages: number;
  changePage: (modifier: number) => string;
};

const TurisPagination = ({
  changePage,
  currentPage,
  totalPages,
}: TurisPaginationProps) => {
  return (
    <>
      <PaginationItem>
        <PaginationPrevious href={changePage(-1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={`?page=${currentPage - 1}`}>
          {currentPage - 1}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={`?page=${currentPage}`} isActive>
          {currentPage}
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink href={`?page=${currentPage + 1}`}>
          {currentPage + 1}
        </PaginationLink>
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
        <PaginationNext href={changePage(1)} />
      </PaginationItem>
    </>
  );
};

export default TurisPagination;
