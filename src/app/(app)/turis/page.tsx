import { getToken } from '../../../lib/cookieCheck';
import { TouristResponse } from '@/lib/types/tourist';
import TouristDataTable from '@/components/turis/dataTable';
import TablePagination from '@/components/turis/tablePagination';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

type TouristsPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const TouristsPage = async ({ searchParams }: TouristsPageProps) => {
  const { page } = searchParams;
  const token = getToken();
  const touristsReq = await fetch(
    `${process.env.BASEURL}/api/Tourist?page=${page ?? 1}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    },
  );
  const tourists = (await touristsReq.json()) as TouristResponse;

  return (
    <div className="flex  w-full flex-col gap-4 rounded-lg bg-card p-4 shadow-md">
      <section className="flex items-center justify-between">
        <h3 className=" font-semibold">Daftar Turis </h3>
        <Link href="turis/add">
          <Button>Tambah Turis Baru</Button>
        </Link>
      </section>
      <TouristDataTable tourists={tourists.data} />
      <TablePagination
        currentPage={page ? Number(page) : 1}
        totalPages={tourists.total_pages}
      />
    </div>
  );
};

export default TouristsPage;
