import { Pagination, PaginationContent } from '@/components/ui/pagination';
import FirstPagePagination from './FirstPage';
import LastPagePagination from './LastPage';
import OtherPagePagination from './OtherPage';

type TablePaginationType = {
  currentPage: number;
  totalPages: number;
};

const TablePagination = ({ totalPages, currentPage }: TablePaginationType) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const changePage = (modifier: number) => {
    return `?page=${currentPage + modifier}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {isFirstPage ? (
          <FirstPagePagination totalPages={totalPages} />
        ) : isLastPage ? (
          <LastPagePagination totalPages={totalPages} />
        ) : (
          <OtherPagePagination
            changePage={changePage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
