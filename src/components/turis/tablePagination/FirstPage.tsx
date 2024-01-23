import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type FirstPagePaginationProps = {
  totalPages: number;
};

const FirstPagePagination = ({ totalPages }: FirstPagePaginationProps) => {
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

export default FirstPagePagination;
