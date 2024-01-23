import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type LastPagePaginationProps = {
  totalPages: number;
};

const LastPagePagination = ({ totalPages }: LastPagePaginationProps) => {
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

export default LastPagePagination;
