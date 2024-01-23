import { Pagination, PaginationContent } from '../ui/pagination';
import TurisPaginationFirst from './TurisPaginationFirst';
import TurisPaginationLast from './TurisPaginationLast';
import TurisPagination from './TurisPagination';

type TurisPaginationProps = {
  currentPage: number;
  totalPages: number;
};

const TurisPaginationWrapper = ({
  totalPages,
  currentPage,
}: TurisPaginationProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const changePage = (modifier: number) => {
    return `?page=${currentPage + modifier}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {isFirstPage ? (
          <TurisPaginationFirst totalPages={totalPages} />
        ) : isLastPage ? (
          <TurisPaginationLast totalPages={totalPages} />
        ) : (
          <TurisPagination
            changePage={changePage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default TurisPaginationWrapper;
